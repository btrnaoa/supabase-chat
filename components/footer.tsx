import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2">
      <p className="space-x-1 text-xs">
        <span>Built with</span>
        <Button
          variant="link"
          className="h-0 items-baseline p-0 text-xs"
          asChild
        >
          <Link href="https://supabase.com/realtime">Supabase Realtime</Link>
        </Button>
        <span>+ Next.js Server Actions</span>
      </p>
      <Link href="https://github.com/btrnaoa/supabase-chat">
        <Image
          src="/github-mark.svg"
          width="32"
          height="32"
          alt="GitHub Invertocat logo"
        />
      </Link>
    </footer>
  )
}
