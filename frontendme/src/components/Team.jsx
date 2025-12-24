const teamMembers = [
  { 
    name: "Aaditya Kapoor", 
    role: "Team Lead & UI/UX Designer", 
    github: "https://github.com/aaditya2107", 
    username: "aaditya2107" 
  },
  { 
    name: "Anshul Kushwaha", 
    role: "Documentation & Presentation", 
    github: "https://github.com/anshul2045", 
    username: "anshul2045" 
  },
  { 
    name: "Aachal Patil", 
    role: "Frontend Developer", 
    github: "https://github.com/aachalpatil0403", 
    username: "aachalpatil0403" 
  },
  { 
    name: "Archana Nair", 
    role: "Backend Developer", 
    github: "https://github.com/Archana7224", 
    username: "Archana7224" 
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet the <span className="gradient-text">Minds Behind APEX</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team of developers and designers working to revolutionize your email experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.username}
              className="group transform transition duration-300 hover:-translate-y-2"
            >
              <div className="glass-card p-6 text-center h-full hover:border-primary/50 transition-all duration-300 group-hover:glow-primary">
                
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={`https://github.com/${member.username}.png`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-border group-hover:border-primary/50 transition-colors relative z-10"
                  />
                </div>

                {/* Info */}
                <h3 className="font-display font-semibold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>

                {/* GitHub */}
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {/* GitHub SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.805 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>@{member.username}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
