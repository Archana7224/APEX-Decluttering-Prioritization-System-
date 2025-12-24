export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="glass-card gradient-border p-12 md:p-16 text-center relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-scale-in">
              <span className="text-primary text-sm">✨</span>
              <span className="text-sm font-medium text-primary">
                Limited Time Offer
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">Transform Your Inbox?</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Join thousands of students and professionals who have already taken control
              of their email. Start your free trial today — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="glow-primary group text-lg px-8 py-3 rounded-xl font-medium bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 flex items-center">
                Start Free Trial
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-muted-foreground text-sm">
                14-day free trial • Cancel anytime
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
