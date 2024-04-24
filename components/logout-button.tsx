"use client"

import { logout } from "@/lib/actions/auth"
import { Button } from "./ui/button"

export default function LogoutButton() {
  return (
    <Button variant="outline" onClick={() => logout()}>
      Log out
    </Button>
  )
}
