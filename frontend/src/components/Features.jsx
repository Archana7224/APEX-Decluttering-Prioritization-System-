import React from "react";

const features = [
  { emoji: "🧠", title: "AI-Powered Sorting", desc: "Automatically categorize emails using AI." },
  { emoji: "🔍", title: "Smart Filters", desc: "Adaptive rules that learn what matters." },
  { emoji: "🔔", title: "Priority Notifications", desc: "Only important alerts reach you." },
  { emoji: "🔒", title: "Privacy First", desc: "Zero-knowledge encryption." },
  { emoji: "⚡", title: "Instant Setup", desc: "Connect Gmail or Outlook in seconds." },
  { emoji: "📊", title: "Analytics Dashboard", desc: "Track productivity visually." },
];

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase text-sm tracking-wide">
            Features
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Master Your Inbox
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Built with cutting-edge AI and privacy-first design.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:-translate-y-2 transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg
                              bg-cyan-400/10 text-cyan-400 text-xl">
                {f.emoji}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {f.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
