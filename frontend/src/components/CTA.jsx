import React from "react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-slate-950">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-16">

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
              <span className="text-indigo-400 text-sm">✨</span>
              <span className="text-sm font-medium text-indigo-300">
                Limited Time Offer
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Inbox?
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of students and professionals who have already taken control
              of their email. Start your free trial today — no credit card required.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-2 text-lg px-8 py-3 rounded-xl font-medium bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-500 hover:scale-105">
                Start Free Trial
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-slate-400 text-sm">
                14-day free trial • Cancel anytime
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
