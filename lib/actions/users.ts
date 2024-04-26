"use server"

import { eq } from "drizzle-orm"
import db from "../db"
import { users } from "../schema"

export async function getUser(userId: string) {
  const [user] = await db.select().from(users).where(eq(users.id, userId))
  return user
}
