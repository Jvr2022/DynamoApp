import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#00AFF0] to-[#0095d1]">
      <div className="container px-4 md:px-6 text-white">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jouw%20alineatekst_20250306_230210_0000-mC7wtSLXwtKuvkpRGKUKjBbXns9xxC.png"
            alt="Dynamo Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Dynamo Revolution</h2>
          <p className="text-white/80 md:text-xl/relaxed">
            Be part of the next generation of communication. Follow our progress, contribute to the project, and help
            shape the future of Dynamo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-pulse">
            <a href="https://www.reddit.com/r/dynamoapp" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#00AFF0] hover:bg-white/90">
                Join r/dynamoapp
              </Button>
            </a>
            <a href="https://github.com/dynamo-chat" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Star on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

