import { getIronSession, type SessionOptions } from "iron-session"
import { cookies } from "next/headers"

interface SessionData {
  userId: string
  username: string
  isLoggedIn: boolean
}

const defaultSession = {
  userId: "",
  username: "",
  isLoggedIn: false,
} satisfies SessionData

const sessionOptions = {
  cookieName: "session",
  password: process.env.SESSION_SECRET!,
  ttl: 24 * 60 * 60,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
} satisfies SessionOptions

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)

  if (!session.isLoggedIn) {
    session.userId = defaultSession.userId
    session.username = defaultSession.username
    session.isLoggedIn = defaultSession.isLoggedIn
  }

  return session
}
