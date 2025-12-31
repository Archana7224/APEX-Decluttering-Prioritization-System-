import React from "react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Home"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Tutorials", "FAQ", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16 relative">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl">
                ✉️
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                APEX
              </span>
            </a>

            <p className="text-gray-400 text-sm mb-4">
              Declutter. Prioritize. Focus.
            </p>

            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  {social.label === "Twitter" && "🐦"}
                  {social.label === "LinkedIn" && "💼"}
                  {social.label === "GitHub" && "🐙"}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} APEX. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ for productive people everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
