import React, { useState } from "react";
import { Menu, X, Mail, User } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Platforms", href: "#platforms" },
  { name: "Support", href: "#support" },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#4F8CFD] text-white py-2.5 rounded-lg hover:opacity-90 transition-colors font-medium text-base"
      >
        Login
      </button>
    </form>
  );
};

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup:", { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700 text-sm">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8CFD]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#4F8CFD] text-white py-2.5 rounded-lg hover:opacity-90 transition-colors font-medium text-base"
      >
        Sign Up
      </button>
    </form>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4F8CFD] to-[#1C64F2] flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[#1C64F2]">APEX</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-base">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#1C64F2] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                style={{ backgroundColor: "#4F8CFD" }}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors font-medium text-base"
              >
                Get Started
                <User className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } glass-card border-t border-border/30`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#1C64F2] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setShowModal(true);
                setIsOpen(false);
              }}
              style={{ backgroundColor: "#4F8CFD" }}
              className="block w-full text-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors font-medium text-base"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setAuthMode("login")}
                className={`px-6 py-2 rounded-l-lg font-medium transition-colors ${
                  authMode === "login"
                    ? "bg-[#4F8CFD] text-white text-base"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 text-base"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setAuthMode("signup")}
                className={`px-6 py-2 rounded-r-lg font-medium transition-colors ${
                  authMode === "signup"
                    ? "bg-[#4F8CFD] text-white text-base"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 text-base"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            {authMode === "login" ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      )}
    </>
  );
}
