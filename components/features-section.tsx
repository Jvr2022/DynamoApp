import { MessageCircle, Video, Shield } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-[#00AFF0]/10 rounded-full">
            <MessageCircle className="h-6 w-6 text-[#00AFF0]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reimagined for Today</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto">
              Project Dynamo brings back what you loved about Skype with modern enhancements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Video className="h-6 w-6 text-[#00AFF0]" />,
              title: "Crystal Clear Calls",
              description: "Experience high-definition audio and video with advanced noise cancellation.",
            },
            {
              icon: <MessageCircle className="h-6 w-6 text-[#00AFF0]" />,
              title: "Simple Interface",
              description: "Intuitive design that feels familiar but with modern improvements.",
            },
            {
              icon: <Shield className="h-6 w-6 text-[#00AFF0]" />,
              title: "Enhanced Security",
              description: "End-to-end encryption and advanced privacy controls for your peace of mind.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-6 border rounded-lg hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in"
            >
              <div className="h-12 w-12 rounded-full bg-[#00AFF0]/20 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

