"use server"

import db from "./db"
import { messages } from "./schema"

export async function sendMessage(formData: FormData) {
  const message = formData.get("message")?.toString()
  if (message) {
    await db.insert(messages).values({ content: message })
  }
}
