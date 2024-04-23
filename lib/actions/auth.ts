"use server"

import { eq, sql } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getSession } from "../auth"
import db from "../db"
import { users } from "../schema"

export async function login(
  _errorMessage: string | undefined,
  formData: FormData
) {
  const session = await getSession()

  const username = (formData.get("username") as string) ?? ""

  if (!username) {
    return "Invalid username"
  }

  const [userExists] = await db
    .select()
    .from(users)
    .where(eq(sql`lower(${users.username})`, username.toLowerCase()))

  if (userExists) {
    return "Username already exists"
  } else {
    const [user] = await db.insert(users).values({ username }).returning()

    session.userId = user.id
    session.username = user.username
    session.isLoggedIn = true

    await session.save()
    redirect("/")
  }
}

export async function logout() {
  const session = await getSession()
  session.destroy()
  revalidatePath("/")
}
