import { MessageCircle, BookOpen, Video, Mail } from "lucide-react";
import React from "react";
const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team during business hours.",
    action: "Start Chat",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and tutorials to help you get started.",
    action: "Read Docs",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks and features.",
    action: "Watch Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a message and we'll respond within 24 hours.",
    action: "Contact Us",
  },
];

const HelpSupport = () => {
  return (
    <section id="support" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Support
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            We're Here to{" "}
            <span className="gradient-text">Help You Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to get the assistance you need, whenever you need it.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="
                glass-card
                p-6
                text-center
                transition-all duration-300
                hover:border-primary/50
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-primary/20
              "
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display font-semibold text-lg mb-2">
                {option.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {option.description}
              </p>

              <button
                className="
                  w-full
                  px-4 py-2
                  rounded-lg
                  border border-border
                  text-sm font-medium
                  transition-colors
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Have questions? Check out our{" "}
            <a href="#" className="text-primary hover:underline">
              FAQ section
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary hover:underline">
              community forum
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;
