import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              Chat on WhatsApp
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/919154156345"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </motion.a>
    </motion.div>
  );
};
