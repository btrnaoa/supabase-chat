"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/actions/auth"
import { useFormState } from "react-dom"

export default function Page() {
  const [errorMessage, formAction] = useFormState(login, undefined)

  return (
    <form action={formAction}>
      <Label htmlFor="username">Username</Label>
      <Input id="username" name="username" required />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      <Button type="submit">Log in</Button>
    </form>
  )
}
