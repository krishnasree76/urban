import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Users, Wifi, Car, Coffee, TreeDeciduous } from "lucide-react";
import villaImage from "@/assets/villa1.jpg";
import cottageImage from "@/assets/cottage1.jpg";

const stayOptions = [
  {
    title: "Luxury Duplex Villa",
    subtitle: "3BHK Premium Stay",
    image: villaImage,
    features: [
      { icon: Home, text: "3 Bedrooms" },
      { icon: Users, text: "Up to 10 Guests" },
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Car, text: "Free Parking" },
    ],
    description:
      "Experience unmatched luxury in our premium 3BHK duplex villa featuring modern architecture, elegant interiors, and world-class amenities perfect for families and groups.",
    highlight: "Premium",
  },
  {
    title: "Cozy Cottages",
    subtitle: "5 Nature-Friendly Units",
    image: cottageImage,
    features: [
      { icon: Home, text: "Private Cottage" },
      { icon: Users, text: "2-4 Guests Each" },
      { icon: Coffee, text: "Room Service" },
      { icon: TreeDeciduous, text: "Garden View" },
    ],
    description:
      "Embrace nature in our charming cottages, thoughtfully designed with rustic elegance and modern comforts, offering a peaceful retreat amidst lush greenery.",
    highlight: "Popular",
  },
];

export const StayOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stay" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-resort mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Accommodations
          </span>
          <h2 className="section-title">
            Where Comfort Meets <span className="retreat-text">Elegance</span>
          </h2>
          <p className="section-subtitle">
            Choose from our luxurious villa or charming cottages, each designed 
            to provide an unforgettable stay experience.
          </p>
        </motion.div>

        {/* Stay Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {stayOptions.map((stay, index) => (
            <motion.div
              key={stay.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-secondary text-sm font-semibold rounded-full">
                    {stay.highlight}
                  </span>
                </div>
                
                {/* Title on Image */}
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-cream-dark/80 text-sm font-medium mb-1">
                    {stay.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-cream-dark">
                    {stay.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {stay.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {stay.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-2 text-secondary"
                    >
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full btn-outline-golden"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Enquire Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
