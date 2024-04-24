import { getSession } from "@/lib/auth"
import type { ComponentPropsWithoutRef } from "react"
import LoginDialog from "./login-dialog"
import LogoutButton from "./logout-button"

interface UserLoginProps extends ComponentPropsWithoutRef<"div"> {}

export default async function UserLogin({ className }: UserLoginProps) {
  const session = await getSession()

  return (
    <div className={className}>
      {!session.isLoggedIn ? <LoginDialog /> : <LogoutButton />}
    </div>
  )
}
