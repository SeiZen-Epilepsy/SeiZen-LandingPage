"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  onClick: () => void;
  children: ReactNode;
}

function NavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        onClick={onClick}
        className="text-sm font-medium transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#35D1C3] hover:to-[#0F83B6]"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function MobileNavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="text-sm font-medium py-2 block transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#35D1C3] hover:to-[#0F83B6]"
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.header
        className={`w-full max-w-[90%] rounded-full transition-all duration-100 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        } ${isMobileMenuOpen ? "rounded-lg transition-none" : ""}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#home"
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2"
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/SeiZen-Logo-Icon.svg"
                  alt="SeiZen Device"
                  width={25}
                  height={25}
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#35D1C3] to-[#0F83B6]">
                SeiZen
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink href="#what" onClick={() => scrollToSection("what")}>
              What is SeiZen
            </NavLink>
            <NavLink href="#why" onClick={() => scrollToSection("why")}>
              Why SeiZen
            </NavLink>
            <NavLink
              href="#testimonials"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </NavLink>
            <NavLink href="#faq" onClick={() => scrollToSection("faq")}>
              FAQ
            </NavLink>
          </motion.nav>

          <div className="flex items-center gap-4">
            <motion.div
              className="hidden md:flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#35D1C3] to-[#0F83B6] hover:from-[#2bb3a6] hover:to-[#0d6f9a] text-white transition-all duration-300"
              >
                Download
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex items-center justify-center md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-6 py-4 flex flex-col gap-4 rounded-b-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <MobileNavLink
                  href="#what"
                  onClick={() => scrollToSection("what")}
                >
                  What is SeiZen
                </MobileNavLink>
                <MobileNavLink
                  href="#why"
                  onClick={() => scrollToSection("why")}
                >
                  Why SeiZen
                </MobileNavLink>
                <MobileNavLink
                  href="#testimonials"
                  onClick={() => scrollToSection("testimonials")}
                >
                  Testimonials
                </MobileNavLink>
                <MobileNavLink
                  href="#faq"
                  onClick={() => scrollToSection("faq")}
                >
                  FAQ
                </MobileNavLink>
                <div className="flex flex-col gap-2 pt-2 border-t dark:border-slate-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#35D1C3] text-[#0F83B6] hover:bg-[#35D1C3]/10"
                  >
                    Log In
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#35D1C3] to-[#0F83B6] hover:from-[#2bb3a6] hover:to-[#0d6f9a] text-white"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
