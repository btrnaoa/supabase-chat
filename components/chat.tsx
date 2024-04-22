"use client"

import supabase from "@/lib/supabase"
import { cn } from "@/lib/utils"
import { useEffect, useState, type ComponentPropsWithoutRef } from "react"

interface Message {
  id: string
  content: string
}

interface ChatProps extends ComponentPropsWithoutRef<"ul"> {
  initialMessages: Message[]
}

export default function Chat({ initialMessages, className }: ChatProps) {
  const [messages, setMessages] = useState(initialMessages)

  useEffect(() => {
    const channel = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const newMessage = payload.new as Message
          setMessages((prev) => [...prev, newMessage])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <ul
      className={cn(
        className,
        "flex flex-col-reverse overflow-hidden hover:overflow-auto"
      )}
    >
      <div>
        {messages.map((message) => (
          <li key={message.id}>
            <p className="text-sm">{message.content}</p>
          </li>
        ))}
      </div>
    </ul>
  )
}
