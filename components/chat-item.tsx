import { cn } from "@/lib/utils"
import type { MessageWithUser } from "@/types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

interface ChatItemProps {
  message: MessageWithUser
  sessionUserId: string
}

export default function ChatItem({ message, sessionUserId }: ChatItemProps) {
  return (
    <li
      className={cn("flex flex-col items-start text-sm", {
        "items-end": message.user.id === sessionUserId,
      })}
    >
      <p className="font-semibold">{message.user.username}</p>
      <p className="text-xs text-muted-foreground">
        {dayjs(message.createdAt).fromNow()}
      </p>
      <p className="mt-2 max-w-[60%] break-words rounded-md bg-gradient-to-t from-teal-500 to-emerald-500 px-3.5 py-2 text-white sm:max-w-[50%]">
        {message.content}
      </p>
    </li>
  )
}
