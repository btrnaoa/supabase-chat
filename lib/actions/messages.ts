"use server"

import { getSession } from "../auth"
import db from "../db"
import { messages } from "../schema"

export async function sendMessage(formData: FormData) {
  const session = await getSession()
  if (!session.isLoggedIn) return

  const message = formData.get("message")?.toString()
  if (message) {
    await db
      .insert(messages)
      .values({ content: message, userId: session.userId })
  }
}
