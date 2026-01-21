import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Maximize2, Theater, Armchair, UtensilsCrossed } from "lucide-react";
import hallImage from "@/assets/stage.jpg";
import lawnImage from "@/assets/lawn2.jpg";

const venues = [
  {
    title: "Grand Lawn",
    image: lawnImage,
    specs: [
      { label: "Size", value: "140 × 120 ft" },
      { label: "Stage", value: "36 × 26 ft" },
      { label: "Capacity", value: "100-900 guests" },
    ],
    icon: Maximize2,
  },
  {
    title: "Function Hall",
    image: hallImage,
    specs: [
      { label: "Size", value: "140 × 50 ft" },
      { label: "Stage", value: "50 × 140 ft" },
      { label: "Capacity", value: "100-300 guests" },
    ],
    icon: Theater,
  },
];

const facilities = [
  { icon: Armchair, title: "400 Banquet Chairs", description: "Premium seating" },
  { icon: UtensilsCrossed, title: "Cooking Utensils", description: "Full kitchen setup" },
  { icon: Maximize2, title: "Round & Food Tables", description: "Complete arrangements" },
];

export const VenueDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-resort mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Venues
          </span>
          <h2 className="section-title">
            Spacious <span className="retreat-text">Event Spaces</span>
          </h2>
          <p className="section-subtitle">
            From grand outdoor lawns to elegant indoor halls, we have the perfect venue 
            for events of any scale.
          </p>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-card rounded-3xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-display font-bold text-cream-dark flex items-center gap-3">
                    <venue.icon className="w-6 h-6 text-primary" />
                    {venue.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {venue.specs.map((spec) => (
                    <div key={spec.label} className="text-center p-3 rounded-xl bg-accent/50">
                      <p className="text-lg font-bold text-primary">{spec.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 border border-primary/10"
        >
          <h3 className="text-xl font-semibold text-secondary mb-6 text-center">
            Included Facilities
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div key={facility.title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <facility.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">{facility.title}</p>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
