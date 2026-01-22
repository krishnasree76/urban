import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/image.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Stay", href: "#stay" },
  { name: "Amenities", href: "#amenities" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Lock body scroll when menu is open (mobile fix)
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-primary/10"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container-resort mx-auto px-4 md:px-8 overflow-x-hidden">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logo}
                alt="Urban Life Retreat"
                className="h-14 md:h-16 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium tracking-wide transition-colors relative group text-secondary"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919154156345"
                className="flex items-center gap-2 text-secondary font-medium"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="hidden xl:inline">+91 91541 56345</span>
              </a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="btn-golden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 text-secondary"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ✅ Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 left-0 right-0 mt-20 bg-white rounded-b-3xl shadow-xl border-t border-primary/10"
            >
              <div className="px-6 py-7 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="block py-2 text-lg font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="pt-3 space-y-3">
                  <a
                    href="tel:+919154156345"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-primary/20 px-4 py-3 text-secondary font-medium"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    +91 91541 56345
                  </a>

                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact");
                    }}
                    className="btn-golden w-full text-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
