import Chat from "@/components/chat"
import MessageForm from "@/components/message-form"
import db from "@/lib/db"
import { messages } from "@/lib/schema"

export default async function Home() {
  const allMessages = await db.select().from(messages)

  return (
    <div className="mx-4 flex h-svh flex-col sm:mx-auto sm:h-3/4 sm:max-w-prose">
      <Chat initialMessages={allMessages} className="my-2 grow sm:mt-4" />
      <MessageForm className="mb-4" />
    </div>
  )
}
