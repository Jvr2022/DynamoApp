import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Video } from "lucide-react"
import { TextAnimation } from "@/components/text-animation"

export function HeroSection() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#e6f7fd] -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00AFF0]/10 animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#00AFF0]/5 animate-pulse delay-700 -z-10"></div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jouw%20alineatekst_20250306_230210_0000-mC7wtSLXwtKuvkpRGKUKjBbXns9xxC.png"
          alt="Dynamo Logo"
          width={120}
          height={120}
          className="w-24 h-24 md:w-30 md:h-30 animate-float"
        />

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            The Future of Communication is <TextAnimation />
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed mx-auto">
            Reconnect with the simplicity you love, enhanced with modern features you need. Coming soon. Join our
            community for updates!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://www.reddit.com/r/dynamoapp" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#00AFF0] hover:bg-[#0095d1] text-white group">
              Join r/dynamoapp
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="https://github.com/dynamo-chat" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-[#00AFF0] text-[#00AFF0]">
              View on GitHub
            </Button>
          </a>
        </div>

        <div className="relative w-full max-w-4xl mx-auto mt-8">
          <div className="aspect-video overflow-hidden rounded-xl border shadow-xl bg-gradient-to-r from-[#00AFF0]/5 to-[#00AFF0]/20">
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="flex flex-col items-center space-y-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jouw%20alineatekst_20250306_230210_0000-mC7wtSLXwtKuvkpRGKUKjBbXns9xxC.png"
                  alt="Dynamo Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 opacity-80"
                />
                <span className="text-2xl font-medium text-[#00AFF0]">Dynamo Preview Coming Soon</span>
                <p className="text-muted-foreground max-w-md text-center">
                  Experience the next generation of communication with crystal clear video, seamless messaging, and
                  enhanced security.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 p-3 bg-white rounded-lg shadow-lg hidden md:flex items-center gap-2 animate-float-slow">
            <Video className="h-5 w-5 text-[#00AFF0]" />
            <span className="text-sm font-medium">HD Video Calls</span>
          </div>
          <div className="absolute -bottom-4 -right-4 p-3 bg-white rounded-lg shadow-lg hidden md:flex items-center gap-2 animate-float-delay">
            <Shield className="h-5 w-5 text-[#00AFF0]" />
            <span className="text-sm font-medium">End-to-End Encryption</span>
          </div>
        </div>
      </div>
    </section>
  )
}

