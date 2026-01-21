import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/image.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Stay", href: "#stay" },
  { name: "Amenities", href: "#amenities" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/urbanliferetreat?igsh=cGJvN3YwcW81ZGp1" },
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d120a] via-[#2b170c] to-[#0f0a06]" />

      {/* Decorative golden glow blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Content */}
      <div className="relative">
        {/* TOP CTA BANNER */}
        {/* <div className="border-b border-white/10">
          <div className="container-resort mx-auto px-4 md:px-8 py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-primary/30 bg-white/5 backdrop-blur-xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2">
                  <Sparkles className="w-5 h-5" />
                  Your Dream Event Destination
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Weddings • Corporate Events • Luxury Stay
                </h3>
                <p className="text-white/70 mt-2 text-sm md:text-base leading-relaxed">
                  Book Urban Life Retreat for your next celebration and create unforgettable memories
                  with premium amenities and spacious venues.
                </p>
              </div>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 bg-primary text-secondary font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition"
              >
                Get Quote
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div> */}

        {/* MAIN FOOTER */}
        <div className="container-resort mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <img src={logo} alt="Urban Life Retreat" className="h-20 w-auto mb-5 drop-shadow" />
              <p className="text-white/70 text-sm leading-relaxed">
                Experience luxury, celebrate memories, and embrace tranquility at{" "}
                <span className="text-primary font-semibold">Urban Life Retreat</span> —
                your premier destination for events and premium getaways.
              </p>

              {/* mini badge */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
                🏝️ Resort • Lawn • Villa • Events
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="group inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </span>
                  <a
                    href="tel:+919154156345"
                    className="text-white/70 hover:text-primary transition-colors text-sm mt-2"
                  >
                    +91 91541 56345
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </span>
                  <a
                    href="mailto:Urbanlife1899@gmail.com"
                    className="text-white/70 hover:text-primary transition-colors text-sm mt-2 break-all"
                  >
                    Urbanlife1899@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </span>
                  <span className="text-white/70 text-sm mt-2 leading-relaxed">
                    Save telephone colony, Abdullapurmet Mandal, Munganoor, Hayathnagar_Khalsa,
                    Telangana 500070
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Social + Mini Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

              {/* Social Buttons */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center
                               hover:bg-primary hover:border-primary hover:text-secondary transition-all shadow-sm hover:shadow-primary/30"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Mini Newsletter style */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <p className="text-sm font-semibold mb-2">Want instant booking support?</p>
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  Send your event date & guest count. We’ll respond quickly.
                </p>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-secondary font-semibold transition"
                >
                  Book Now <ArrowUpRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="container-resort mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Urban Life Retreat. All rights reserved.
              </p>
              <p className="text-white/60 text-sm">
                Designed with <span className="text-primary">❤</span> for unforgettable experiences
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md
                     flex items-center justify-center hover:bg-primary hover:text-secondary transition"
          aria-label="Back to top"
        >
          <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
        </motion.button>
      </div>
    </footer>
  );
};
