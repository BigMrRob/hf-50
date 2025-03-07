"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/40 backdrop-blur-xl h-16 shadow-lg shadow-black/[0.03]"
          : "bg-transparent h-20"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <motion.a
            href="/"
            className="group flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logos/hf50-logo-b-orange-t-white.png"
              alt="HF50 Logo"
              width={100}
              height={40}
              className={`transition-all duration-300 ${
                scrolled ? "h-10 w-auto" : "h-12 w-auto"
              }`}
              priority
            />
          </motion.a>
          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#model">Our Model</NavLink>
            <NavLink href="#states">States</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-white/80 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
          >
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </Button>
          <Button className="hidden md:inline-flex relative group px-6 py-2 overflow-hidden bg-[#e65c25] hover:bg-[#e65c25]/90 text-white transition-all duration-300">
            <span className="relative z-10">
              <SignUpButton>Get Started</SignUpButton>
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <motion.div
              className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] opacity-0 group-hover:opacity-30"
              style={{
                rotate: -45,
                scale: 1.5,
                x: "100%",
              }}
              animate={{
                x: ["100%", "-100%"],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </Button>
          <button
            className="md:hidden relative group p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative flex h-[20px] w-[20px] transform items-center justify-center overflow-hidden transition-all duration-200">
              <div
                className={`absolute h-[2px] w-5 transform bg-white transition-all duration-300 ease-in-out group-hover:bg-[#e65c25]
                  ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
              />
              <div
                className={`absolute h-[2px] w-5 transform bg-white transition-all duration-300 ease-in-out group-hover:bg-[#e65c25]
                  ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <div
                className={`absolute h-[2px] w-5 transform bg-white transition-all duration-300 ease-in-out group-hover:bg-[#e65c25]
                  ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden absolute top-full left-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="#model" onClick={() => setIsOpen(false)}>
                Our Model
              </MobileNavLink>
              <MobileNavLink href="#states" onClick={() => setIsOpen(false)}>
                States
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
              <div className="pt-4 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-center text-white/80 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                >
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                </Button>
                <Button className="w-full justify-center relative group overflow-hidden bg-[#e65c25] hover:bg-[#e65c25]/90 text-white transition-all duration-300">
                  <span className="relative z-10">
                    <SignUpButton>Get Started</SignUpButton>
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e65c25]/30 to-transparent opacity-0 transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0 }}
      />
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="group relative text-sm font-medium text-white/70 hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#e65c25] to-[#ff8f4d] rounded-full transition-all duration-300 group-hover:w-full"></span>
      </span>
    </motion.a>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block w-full px-4 py-3 text-base text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/[0.08]"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}
