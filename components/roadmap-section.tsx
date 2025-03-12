import { Clock } from "lucide-react"

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#f8fcff]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-[#00AFF0]/10 rounded-full">
            <Clock className="h-6 w-6 text-[#00AFF0]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Development Roadmap</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto">
              Our journey to revolutionize communication.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#00AFF0]/10">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Roadmap Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're currently refining our development roadmap to provide you with the most accurate timeline. Check
              back soon for a detailed breakdown of our upcoming features and milestones.
            </p>
            <div className="w-full max-w-md mx-auto h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#00AFF0] w-1/3 rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Development in progress</p>
          </div>
        </div>
      </div>
    </section>
  )
}

