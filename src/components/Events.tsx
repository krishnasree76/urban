import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Music, Cake, Briefcase, Calendar, ArrowRight } from "lucide-react";
import weddingImage from "@/assets/event1.jpg";

const eventTypes = [
  { icon: Heart, title: "Destination Weddings" },
  { icon: Sparkles, title: "Engagement Ceremonies" },
  { icon: Music, title: "Haldi & Sangeeth" },
  { icon: Cake, title: "Birthday Celebrations" },
  { icon: Briefcase, title: "Corporate Events" },
  { icon: Calendar, title: "Reception Parties" },
];

export const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding bg-background" ref={ref}>
      <div className="container-resort mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-golden-lg">
              <img
                src={weddingImage}
                alt="Destination Wedding at Urban Life Retreat"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              {/* <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary">100+</p>
                    <p className="text-sm text-muted-foreground">Events Hosted</p>
                  </div>
                  <div className="flex-1 bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary">900</p>
                    <p className="text-sm text-muted-foreground">Guests Capacity</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Celebrations
            </span>
            <h2 className="section-title">
              Create <span className="retreat-text">Unforgettable</span> Memories
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, Urban Life Retreat provides 
              the perfect canvas for your most cherished moments. Our dedicated team ensures 
              every detail is perfect.
            </p>

            {/* Event Types Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                >
                  <event.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-secondary">{event.title}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-golden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Event
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="tel:+919154156345"
                className="btn-outline-golden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
