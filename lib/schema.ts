import { relations } from "drizzle-orm"
import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { nanoid } from "nanoid"

export const users = pgTable("users", {
  id: text("id")
    .$defaultFn(() => nanoid())
    .primaryKey(),
  username: text("username").notNull().unique(),
})

export const usersRelations = relations(users, ({ many }) => ({
  messages: many(messages),
}))

export const messages = pgTable("messages", {
  id: text("id")
    .$defaultFn(() => nanoid())
    .primaryKey(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  userId: text("user_id"),
})

export const messagesRelations = relations(messages, ({ one }) => ({
  user: one(users, {
    fields: [messages.userId],
    references: [users.id],
  }),
}))
