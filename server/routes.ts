import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Create a test account or configure with real credentials
const createTransporter = async () => {
  try {
    // For production, use real credentials from environment variables
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    // For development, use Ethereal
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch (error) {
    console.error("Failed to create email transporter:", error);
    return null;
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming data
      const result = insertContactSchema.safeParse(req.body);

      if (!result.success) {
        const errorMessage = fromZodError(result.error).message;
        return res.status(400).json({ success: false, message: errorMessage });
      }

      const { name, email, subject, message } = result.data;

      // Store the message in the database
      const contactMessage = await storage.createContactMessage({
        name,
        email,
        subject: subject || "Website Contact Form",
        message,
        createdAt: new Date().toISOString(),
      });

      // Set up email sending
      const transporter = await createTransporter();

      if (transporter) {
        try {
          // Send notification to admin
          const adminInfo = await transporter.sendMail({
            from: '"Portfolio Website" <noreply@example.com>',
            to: process.env.NOTIFICATION_EMAIL || "yagnasivasaikumar@gmail.com",
            subject: `New Contact Form Submission: ${subject || "Website Contact"}`,
            text: `
              Name: ${name}
              Email: ${email}

              Message:
              ${message}
            `,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject || "Website Contact"}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          });

          // Send auto-reply to user
          const userInfo = await transporter.sendMail({
            from: '"Yagna Siva Sai Kumar" <noreply@example.com>',
            to: email,
            subject: `Thank you for your message`,
            text: `
              Dear ${name},

              Thank you for contacting me. I have received your message and will get back to you as soon as possible.

              Best regards,
              Yagna Siva Sai Kumar
            `,
            html: `
              <h2>Thank you for your message</h2>
              <p>Dear ${name},</p>
              <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
              <p>Best regards,<br>Yagna Siva Sai Kumar</p>
            `,
          });

          console.log("Message sent:", adminInfo.messageId);

          // For development - show preview URL
          if (process.env.NODE_ENV !== "production") {
            console.log("Preview URL:", nodemailer.getTestMessageUrl(adminInfo));
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          // Continue with success response even if email fails
          // The message is still stored in the database
        }
      }

      return res.status(200).json({
        success: true,
        message: "Message received. Thank you for contacting us!",
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your message. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}