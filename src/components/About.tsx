import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Luxury Living",
    description: "Premium duplex villa with modern amenities and elegant interiors",
  },
  {
    icon: Heart,
    title: "Perfect Celebrations",
    description: "Ideal destination for weddings, engagements, and special occasions",
  },
  {
    icon: Users,
    title: "Corporate Excellence",
    description: "World-class facilities for corporate events and team retreats",
  },
  {
    icon: MapPin,
    title: "Serene Location",
    description: "Peaceful retreat nestled in the beautiful landscapes of Telangana",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container-resort mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Us
            </span>
            <h2 className="section-title">
              Welcome to{" "}
              <span className="block">
                Urban Life <span className="retreat-text">Retreat</span>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Discover a haven of tranquility and luxury at Urban Life Retreat, where every 
              moment is crafted to perfection. Our resort offers an exceptional blend of 
              comfort, elegance, and natural beauty, making it the ideal destination for 
              memorable celebrations and peaceful getaways.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're planning a grand destination wedding, an intimate family gathering, 
              a productive corporate retreat, or simply seeking a luxurious escape from the 
              everyday, Urban Life Retreat provides the perfect setting with our premium 3BHK 
              duplex villa, charming cottages, and state-of-the-art event facilities.
            </p>

            <motion.button
              onClick={() => {
                const element = document.querySelector("#stay");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-golden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Stays
            </motion.button>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-primary/10 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
