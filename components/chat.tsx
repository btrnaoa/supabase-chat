"use client"

import { getUser } from "@/lib/actions/users"
import supabase from "@/lib/supabase"
import { cn } from "@/lib/utils"
import type { MessagePayload, MessageWithUser } from "@/types"
import { useEffect, useState, type ComponentPropsWithoutRef } from "react"
import ChatItem from "./chat-item"

interface ChatProps extends ComponentPropsWithoutRef<"ul"> {
  initialMessages: MessageWithUser[]
  sessionUserId: string
}

export default function Chat({
  initialMessages,
  sessionUserId,
  className,
}: ChatProps) {
  const [messages, setMessages] = useState(initialMessages)

  useEffect(() => {
    const channel = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        async (payload) => {
          const newMessage = payload.new as MessagePayload

          const { username } = await getUser(newMessage.user_id)

          const message = {
            ...newMessage,
            createdAt: newMessage.created_at,
            user: {
              id: newMessage.user_id,
              username,
            },
          }

          setMessages((prev) => [...prev, message])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <ul className={cn(className, "flex flex-col-reverse overflow-auto")}>
      <div className="space-y-4">
        {messages.map((message) => (
          <ChatItem
            key={message.id}
            message={message}
            sessionUserId={sessionUserId}
          />
        ))}
      </div>
    </ul>
  )
}
