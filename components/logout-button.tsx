"use client"

import { logout } from "@/lib/actions/auth"
import { Button } from "./ui/button"

export default function LogoutButton() {
  return (
    <Button variant="link" onClick={() => logout()}>
      Log out
    </Button>
  )
}
