import Chat from "@/components/chat"
import MessageForm from "@/components/message-form"
import UserLogin from "@/components/user-login"
import { getSession } from "@/lib/auth"
import db from "@/lib/db"
import { messages, users } from "@/lib/schema"
import { eq } from "drizzle-orm"

export default async function Home() {
  const session = await getSession()

  const allMessages = await db
    .select({
      id: messages.id,
      content: messages.content,
      createdAt: messages.createdAt,
      user: {
        id: users.id,
        username: users.username,
      },
    })
    .from(messages)
    .innerJoin(users, eq(users.id, messages.userId))

  return (
    <>
      <div className="mx-4 flex h-svh flex-col sm:mx-auto sm:h-3/4 sm:max-w-prose">
        <UserLogin className="mt-4 self-end" />
        <Chat
          initialMessages={allMessages}
          sessionUserId={session.userId}
          className="my-2 grow"
        />
        <MessageForm className="mb-4" />
      </div>
    </>
  )
}
