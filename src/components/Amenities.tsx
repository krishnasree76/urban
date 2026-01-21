import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Waves,
  Trophy,
  Building2,
  TreePine,
  Theater,
  Armchair,
  UtensilsCrossed,
  Music,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "2 Swimming Pools",
    description: "Relax and rejuvenate in our pristine pools",
  },
  {
    icon: Trophy,
    title: "Box Cricket",
    description: "Indoor cricket facility for sports enthusiasts",
  },
  {
    icon: Building2,
    title: "Grand Function Hall",
    description: "Capacity for 100-300 guests",
  },
  {
    icon: TreePine,
    title: "Sprawling Lawns",
    description: "Capacity for 100-900 members",
  },
  {
    icon: Theater,
    title: "Stage Arrangements",
    description: "Professional stage setup for events",
  },
  {
    icon: Armchair,
    title: "Banquet Seating",
    description: "400 chairs with round tables",
  },
  {
    icon: UtensilsCrossed,
    title: "Cooking Facilities",
    description: "Complete kitchen with utensils",
  },
  {
    icon: Music,
    title: "Sound & Lighting",
    description: "Professional AV equipment available",
  },
];

export const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="section-padding bg-secondary" ref={ref}>
      <div className="container-resort mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Facilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
            World-Class <span className="text-primary">Amenities</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
            Everything you need for a perfect stay and memorable celebrations
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 
                         hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 
                            group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <amenity.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
