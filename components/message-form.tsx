"use client"

import { sendMessage } from "@/lib/actions/messages"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { ComponentPropsWithoutRef, useRef } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface MessageFormProps extends ComponentPropsWithoutRef<"form"> {}

export default function MessageForm({ className }: MessageFormProps) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await sendMessage(formData)
        ref.current?.reset()
      }}
      className={cn(className, "flex gap-2")}
    >
      <Input type="text" name="message" required />
      <Button type="submit" variant="outline" size="icon" className="flex-none">
        <ArrowUp className="h-4 w-4" />
      </Button>
    </form>
  )
}
