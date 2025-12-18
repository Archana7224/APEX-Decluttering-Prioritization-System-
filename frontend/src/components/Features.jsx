const features = [
  {
    icon: "🧠",
    title: "AI-Powered Sorting",
    description:
      "Machine learning algorithms analyze your email patterns to automatically categorize and prioritize messages.",
  },
  {
    icon: "🔍",
    title: "Smart Filters",
    description:
      "Create intelligent rules that adapt to your workflow. Let APEX learn what matters most to you.",
  },
  {
    icon: "🔔",
    title: "Priority Notifications",
    description:
      "Get notified only for truly important emails. Reduce notification fatigue and stay focused.",
  },
  {
    icon: "🛡️",
    title: "Privacy First",
    description:
      "Your data stays yours. Enterprise-grade encryption with zero-knowledge architecture.",
  },
  {
    icon: "⚡",
    title: "Instant Setup",
    description:
      "Connect your Gmail or Outlook in seconds. No complex configuration required.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Visualize your email habits and track productivity improvements over time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Master Your Inbox</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technology to transform how you interact with email.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group transform transition duration-300 hover:-translate-y-2"
            >
              <div className="glass-card p-6 h-full transition-all duration-300 hover:border-primary/50">

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 text-xl group-hover:glow-primary transition-all">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
