import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  integer,
  boolean,
  serial,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for Google/GitHub OAuth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
// (IMPORTANT) This table is mandatory for Google/GitHub OAuth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  plan: varchar("plan").default("free").notNull(), // free, pro, team
  usageCount: integer("usage_count").default(0).notNull(),
  lastUsage: timestamp("last_usage"),
});

// Business idea validations table
export const validations = pgTable("validations", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  ideaText: text("idea_text").notNull(),
  analysis: jsonb("analysis"), // Store AI analysis results
  validationScore: integer("validation_score"),
  marketSize: varchar("market_size"),
  competitionLevel: varchar("competition_level"),
  targetAudience: text("target_audience"),
  strengths: text("strengths").array(),
  weaknesses: text("weaknesses").array(),
  recommendations: text("recommendations").array(),
  pitchDeck: jsonb("pitch_deck"), // Store pitch deck slides
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Usage tracking for freemium model
export const usageTracking = pgTable("usage_tracking", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  action: varchar("action").notNull(), // validation, pitch_deck, export
  timestamp: timestamp("timestamp").defaultNow(),
  metadata: jsonb("metadata"), // Additional tracking data
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  firstName: true,
  lastName: true,
  profileImageUrl: true,
});

export const insertValidationSchema = createInsertSchema(validations).pick({
  ideaText: true,
  analysis: true,
  validationScore: true,
  marketSize: true,
  competitionLevel: true,
  targetAudience: true,
  strengths: true,
  weaknesses: true,
  recommendations: true,
  pitchDeck: true,
});

export const insertUsageSchema = createInsertSchema(usageTracking).pick({
  action: true,
  metadata: true,
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type InsertValidation = z.infer<typeof insertValidationSchema>;
export type Validation = typeof validations.$inferSelect;
export type InsertUsage = z.infer<typeof insertUsageSchema>;
export type Usage = typeof usageTracking.$inferSelect;
