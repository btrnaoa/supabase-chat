import { sendMessage } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface MessageFormProps extends ComponentPropsWithoutRef<"form"> {}

export default function MessageForm({ className }: MessageFormProps) {
  return (
    <form action={sendMessage} className={cn(className, "flex gap-2")}>
      <Input type="text" name="message" required />
      <Button type="submit" variant="outline" size="icon" className="flex-none">
        <ArrowUp className="h-4 w-4" />
      </Button>
    </form>
  )
}
