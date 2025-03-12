import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fcff]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-[#00AFF0]/10 rounded-full">
            <Mail className="h-6 w-6 text-[#00AFF0]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Newsletter Coming Soon</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto">
              We're working on setting up our newsletter. Stay tuned for updates, beta access invitations, and exclusive
              content.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

