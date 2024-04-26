import { getSession } from "@/lib/auth"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"
import LoginDialog from "./login-dialog"
import LogoutButton from "./logout-button"

interface UserLoginProps extends ComponentPropsWithoutRef<"div"> {}

export default async function UserLogin({ className }: UserLoginProps) {
  const session = await getSession()

  return (
    <div className={cn(className, "flex flex-col items-end")}>
      {!session.isLoggedIn ? (
        <LoginDialog />
      ) : (
        <>
          <p className="mb-2 text-sm">
            Welcome, <span className="font-semibold">{session.username}</span>!
          </p>
          <LogoutButton />
        </>
      )}
    </div>
  )
}
