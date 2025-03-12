import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jouw%20alineatekst_20250306_230210_0000-mC7wtSLXwtKuvkpRGKUKjBbXns9xxC.png"
            alt="Dynamo Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-[#00AFF0] hidden sm:inline-block">Dynamo</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#features" className="text-sm font-medium hover:text-[#00AFF0] transition-colors">
            Features
          </Link>
          <Link href="/#roadmap" className="text-sm font-medium hover:text-[#00AFF0] transition-colors">
            Roadmap
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-[#00AFF0] transition-colors">
            FAQ
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-[#00AFF0] transition-colors">
            Pricing
          </Link>
          <a
            href="https://www.reddit.com/r/dynamoapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#00AFF0] transition-colors"
          >
            Reddit
          </a>
          <a
            href="https://github.com/dynamo-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#00AFF0] transition-colors"
          >
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com/dynamo-chat" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#00AFF0] hover:bg-[#0095d1] text-white">View on GitHub</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

