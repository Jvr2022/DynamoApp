import Link from "next/link"
import Image from "next/image"
import { FaGithub, FaReddit } from "react-icons/fa"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container flex flex-col gap-8 py-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jouw%20alineatekst_20250306_230210_0000-mC7wtSLXwtKuvkpRGKUKjBbXns9xxC.png"
                alt="Dynamo Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-[#00AFF0]">Dynamo</span>
            </Link>
            <p className="text-muted-foreground">
              Project Dynamo is reimagining communication for the modern era, bringing back what you loved about Skype
              with enhanced features and security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Project</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors"
                >
                  Features
                </Link>
                <Link href="/#roadmap" className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors">
                  Roadmap
                </Link>
                <a
                  href="https://github.com/dynamo-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors"
                >
                  GitHub
                </a>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors">
                  FAQ
                </Link>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Community</h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="https://www.reddit.com/r/dynamoapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors"
                >
                  Reddit
                </a>
                <span className="text-sm text-muted-foreground">Discord (Coming Soon)</span>
              </nav>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-[#00AFF0] transition-colors"
                >
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-8">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Project Dynamo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/dynamo-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00AFF0]"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.reddit.com/r/dynamoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00AFF0]"
            >
              <span className="sr-only">Reddit</span>
              <FaReddit className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
