import {
  users,
  validations,
  usageTracking,
  type User,
  type UpsertUser,
  type InsertValidation,
  type Validation,
  type InsertUsage,
  type Usage,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, count, sql } from "drizzle-orm";

export interface IStorage {
  // User operations (IMPORTANT) these user operations are mandatory for Google/GitHub OAuth.
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Validation operations
  createValidation(validation: InsertValidation & { userId: string }): Promise<Validation>;
  getValidation(id: number): Promise<Validation | undefined>;
  getUserValidations(userId: string): Promise<Validation[]>;
  
  // Usage tracking operations
  trackUsage(usage: InsertUsage & { userId: string }): Promise<Usage>;
  getUserUsageCount(userId: string): Promise<number>;
  incrementUserUsage(userId: string): Promise<void>;
  
  // Plan management
  updateUserPlan(userId: string, plan: string): Promise<void>;
  canUserValidate(userId: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User operations (IMPORTANT) these user operations are mandatory for Google/GitHub OAuth.
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Validation operations
  async createValidation(validation: InsertValidation & { userId: string }): Promise<Validation> {
    const [result] = await db.insert(validations).values(validation).returning();
    return result;
  }

  async getValidation(id: number): Promise<Validation | undefined> {
    const [validation] = await db.select().from(validations).where(eq(validations.id, id));
    return validation;
  }

  async getUserValidations(userId: string): Promise<Validation[]> {
    return await db
      .select()
      .from(validations)
      .where(eq(validations.userId, userId))
      .orderBy(desc(validations.createdAt));
  }

  // Usage tracking operations
  async trackUsage(usage: InsertUsage & { userId: string }): Promise<Usage> {
    const [result] = await db.insert(usageTracking).values(usage).returning();
    return result;
  }

  async getUserUsageCount(userId: string): Promise<number> {
    const [result] = await db
      .select({ count: count() })
      .from(usageTracking)
      .where(eq(usageTracking.userId, userId));
    return result.count;
  }

  async incrementUserUsage(userId: string): Promise<void> {
    await db
      .update(users)
      .set({ 
        usageCount: sql`${users.usageCount} + 1`,
        lastUsage: new Date()
      })
      .where(eq(users.id, userId));
  }

  // Plan management
  async updateUserPlan(userId: string, plan: string): Promise<void> {
    await db
      .update(users)
      .set({ plan, updatedAt: new Date() })
      .where(eq(users.id, userId));
  }

  async canUserValidate(userId: string): Promise<boolean> {
    const user = await this.getUser(userId);
    if (!user) return false;

    switch (user.plan) {
      case "free":
        return user.usageCount < 1;
      case "pro":
        return user.usageCount < 10;
      case "team":
        return true; // unlimited
      default:
        return false;
    }
  }
}

export const storage = new DatabaseStorage();
