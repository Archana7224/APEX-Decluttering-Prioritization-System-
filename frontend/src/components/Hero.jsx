import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-[160px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-8">
            <span>✨</span>
            <span className="text-sm text-cyan-400">
              AI-Powered Email Intelligence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Declutter Your Inbox.
            <br />
            <span className="gradient-text">
              Prioritize What Matters.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            APEX uses advanced AI to automatically organize, prioritize, and
            declutter your Outlook and Gmail. Designed for students and
            professionals who demand focus.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="glow-primary px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:scale-105 transition-all duration-300">
              Start Free Trial →
            </button>

            <button className="px-8 py-4 rounded-xl font-medium border border-white/20 text-white hover:bg-white/5 transition">
              Launch Extension
            </button>
          </div>

          {/* Preview Card */}
          <div className="relative mx-auto max-w-3xl">
            <div className="glass-card p-1 rounded-2xl glow-primary">
              <div className="bg-slate-900 rounded-xl overflow-hidden">

                {/* Header */}
                <div className="p-4 border-b border-white/10 flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-gray-400">
                      APEX Dashboard
                    </span>
                  </div>
                </div>

                {/* Emails */}
                <div className="p-6 space-y-4">

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        Urgent: Project Deadline Tomorrow
                      </p>
                      <p className="text-xs text-gray-400">
                        From: Professor Smith
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-cyan-400 text-black">
                      Priority
                    </span>
                  </div>

                  {[
                    { title: "Weekly Newsletter", from: "TechDigest", opacity: "opacity-60" },
                    { title: "Meeting Notes - Q4 Review", from: "Team Lead", opacity: "opacity-40" },
                  ].map((email, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-4 rounded-lg border border-white/10 ${email.opacity}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        📥
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{email.title}</p>
                        <p className="text-xs text-gray-400">
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
