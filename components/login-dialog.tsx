"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/actions/auth"
import { useFormState } from "react-dom"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export default function LoginDialog() {
  const [errorMessage, formAction] = useFormState(login, undefined)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Log in</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter username</DialogTitle>
          <DialogDescription>
            Your username will expire in 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" required />
          <p className="text-sm text-red-500">{errorMessage}&nbsp;</p>
          <Button type="submit" className="mt-2">
            Log in
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
