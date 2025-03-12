export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed mx-auto">
              Everything you need to know about Project Dynamo.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              question: "When will Project Dynamo launch?",
              answer:
                "We're working hard on development and finalizing our launch timeline. For the latest updates, join our Reddit community at r/dynamoapp.",
            },
            {
              question: "How can I get early access?",
              answer:
                "Sign up for our newsletter to receive beta access invitations. We'll be rolling out early access to community members in phases.",
            },
            {
              question: "Will Dynamo be open-source?",
              answer:
                "Yes, Dynamo is fully open-source! You can contribute by visiting our GitHub repository at github.com/dynamo-chat.",
            },
            {
              question: "What makes Dynamo different from other communication apps?",
              answer:
                "Dynamo combines the simplicity of classic communication tools with modern features, enhanced security, and a commitment to user privacy. We're also building it with community input from the ground up.",
            },
            {
              question: "Will there be a free version of Dynamo?",
              answer:
                "Yes, Dynamo will offer a free tier with core features. We're also planning premium tiers with advanced features to support ongoing development and server costs.",
            },
            {
              question: "What platforms will Dynamo support?",
              answer:
                "We're aiming for cross-platform support including Windows, macOS, iOS, Android, and web browsers from day one.",
            },
            {
              question: "How can I contribute to the project?",
              answer:
                "You can contribute by joining our GitHub repository, participating in discussions on our Reddit community, or signing up for beta testing. We welcome all forms of contribution!",
            },
            {
              question: "Will Dynamo support end-to-end encryption?",
              answer:
                "End-to-end encryption is a core feature we're implementing to ensure your conversations remain private and secure.",
            },
          ].map((faq, i) => (
            <div key={i} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

