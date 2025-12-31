import React from "react";

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "5M+", label: "Emails Organized" },
  { number: "99.9%", label: "Uptime" },
  { number: "4.9/5", label: "User Rating" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="animate-slide-left">
            <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
              About APEX
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Built for the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Modern Professional
              </span>
            </h2>

            <p className="text-slate-400 text-lg mb-8">
              We believe your inbox shouldn't control your day. APEX was created by a team of
              productivity enthusiasts and AI engineers who understand the overwhelming nature
              of modern communication. Our mission is simple: help students and professionals
              reclaim their focus.
            </p>

            <div className="space-y-6">
              {/* Mission */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/15 flex items-center justify-center">
                  🎯
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Our Mission</h4>
                  <p className="text-slate-400 text-sm">
                    Eliminate email anxiety and boost productivity for everyone.
                  </p>
                </div>
              </div>

              {/* Who We Serve */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/15 flex items-center justify-center">
                  👥
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Who We Serve</h4>
                  <p className="text-slate-400 text-sm">
                    Students managing coursework and professionals handling high-volume inboxes.
                  </p>
                </div>
              </div>

              {/* Our Approach */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/15 flex items-center justify-center">
                  💡
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Our Approach</h4>
                  <p className="text-slate-400 text-sm">
                    AI that learns your preferences, not just rules you set manually.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-right">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center
                           transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="font-display text-4xl md:text-5xl font-bold 
                                bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>

                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
