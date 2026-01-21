import { motion } from "framer-motion";
import { Play, Phone } from "lucide-react";
import heroImage from "@/assets/hero1.jpg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Urban Life Retreat - Luxury Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-secondary/50" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container-resort mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-medium tracking-widest uppercase border border-primary/30">
            Welcome to Paradise
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-cream-dark mb-4 tracking-tight"
        >
          <span className="block">URBAN LIFE</span>
          <span className="font-display italic text-primary">Retreat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-cream-dark/90 mb-4 font-light tracking-wide"
        >
          Destination Weddings • Corporate Events • Luxury Stay
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base text-cream-dark/70 mb-10 max-w-2xl mx-auto"
        >
          Nestled in the serene landscapes of Telangana, experience unparalleled luxury
          with our premium villa, cozy cottages, and world-class event venues.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection("#stay")}
            className="btn-golden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explore Resort
          </motion.button>

          <motion.a
            href="tel:+919154156345"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold 
                     border-2 border-cream-dark/50 text-cream-dark rounded-full 
                     transition-all duration-300 hover:bg-cream-dark/10 hover:border-cream-dark
                     backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-cream-dark/50 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
