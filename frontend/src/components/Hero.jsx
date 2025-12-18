export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card gradient-border mb-8 animate-fade-up">
            <span className="text-primary">✨</span>
            <span className="text-sm font-medium">
              AI-Powered Email Intelligence
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100">
            Declutter Your Inbox.{" "}
            <span className="gradient-text">Prioritize What Matters.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            APEX uses advanced AI to automatically organize, prioritize, and
            declutter your Outlook and Gmail. Designed for students and
            professionals who demand focus.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <button className="glow-primary group px-8 py-3 rounded-xl font-medium bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 flex items-center">
              Start Free Trial
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="px-8 py-3 rounded-xl font-medium border gradient-border hover:bg-primary/10 transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Email Preview Card */}
          <div className="perspective-card animate-fade-up delay-500">
            <div className="glass-card gradient-border p-1 rounded-2xl glow-primary">
              <div className="bg-card rounded-xl overflow-hidden">

                {/* Header */}
                <div className="p-4 border-b border-border flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-muted-foreground">
                      APEX Dashboard
                    </span>
                  </div>
                </div>

                {/* Emails */}
                <div className="p-6 space-y-4">

                  {/* Priority Email */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/30 animate-slide-left delay-700">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        Urgent: Project Deadline Tomorrow
                      </p>
                      <p className="text-xs text-muted-foreground">
                        From: Professor Smith
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-primary text-primary-foreground">
                      Priority
                    </span>
                  </div>

                  {/* Normal Emails */}
                  {[
                    { title: "Weekly Newsletter", from: "TechDigest", opacity: "opacity-60" },
                    { title: "Meeting Notes - Q4 Review", from: "Team Lead", opacity: "opacity-40" },
                  ].map((email, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-4 rounded-lg border border-border animate-slide-left ${email.opacity}`}
                      style={{ animationDelay: `${0.9 + i * 0.2}s` }}
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        📥
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{email.title}</p>
                        <p className="text-xs text-muted-foreground">
                          From: {email.from}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
