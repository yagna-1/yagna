import { users, contactMessages, type User, type InsertUser, type ContactMessage, type InsertContact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(contact: InsertContact & { createdAt: string }): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  currentId: number;
  contactId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.currentId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactMessage(contactData: InsertContact & { createdAt: string }): Promise<ContactMessage> {
    const id = this.contactId++;
    // Create a properly typed ContactMessage object
    const contactMessage: ContactMessage = { 
      id,
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
      subject: contactData.subject ?? null,
      createdAt: contactData.createdAt
    };
    this.contactMessages.set(id, contactMessage);
    console.log("Contact message stored:", contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
