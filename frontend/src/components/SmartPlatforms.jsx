import { Check, Mail } from "lucide-react";
import React from "react";

const platforms = [
  {
    name: "Gmail",
    description: "Full Google Workspace integration with real-time sync",
    features: ["Labels sync", "Priority inbox", "Smart compose suggestions"],
    color: "from-cyan-400 to-indigo-500",
  },
  {
    name: "Outlook",
    description: "Seamless Microsoft 365 integration for enterprises",
    features: ["Focused inbox", "Categories sync", "Calendar integration"],
    color: "from-indigo-400 to-purple-500",
  },
];

export default function SmartPlatforms() {
  return (
    <section id="platforms" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
            Integrations
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Works With Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Favorite Platforms
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Connect your existing email accounts and start organizing in minutes.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full
                         transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color}
                flex items-center justify-center mb-6
                transition-transform duration-300 group-hover:scale-110`}
              >
                <Mail className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-2xl mb-2 text-white">
                {platform.name}
              </h3>

              <p className="text-slate-400 mb-6">
                {platform.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
