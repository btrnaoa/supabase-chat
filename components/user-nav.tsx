import { getSession } from "@/lib/auth"
import Link from "next/link"
import LogoutButton from "./logout-button"
import { buttonVariants } from "./ui/button"

export default async function UserNav() {
  const session = await getSession()

  return (
    <>
      {!session.isLoggedIn ? (
        <Link href="/login" className={buttonVariants({ variant: "link" })}>
          Log in
        </Link>
      ) : (
        <LogoutButton />
      )}
    </>
  )
}
