import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
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
            &copy; {new Date().getFullYear()} Project Dynamo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/dynamo-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00AFF0]"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://www.reddit.com/r/dynamoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00AFF0]"
            >
              <span className="sr-only">Reddit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16.5 7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0"></path>
                <path d="M8.742 10.148a1.5 1.5 0 1 0-2.984.452c.06.399.193.736.38 1.013m13.724-1.013a1.5 1.5 0 1 0-2.984-.452c.06.399.193.736.38 1.013"></path>
                <path d="M8.138 11.613c.294-.294.69-.458 1.104-.458.414 0 .81.164 1.104.458"></path>
                <path d="M15.862 11.613c-.294-.294-.69-.458-1.104-.458-.414 0 .81.164 1.104.458"></path>
                <path d="M9.242 13.38c.29.59.865 1.007 1.528 1.145.663.138 1.353-.002 1.89-.385"></path>
                <path d="M14.758 13.38c-.29.59-.865 1.007-1.528 1.145-.663.138-1.353-.002-1.89-.385"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

