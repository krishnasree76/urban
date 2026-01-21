import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arun",
    event: "Wedding Celebration",
    content:
      "Our destination wedding at Urban Life Retreat was nothing short of magical. The venue, service, and attention to detail exceeded all our expectations. Every guest was amazed!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    event: "Corporate Retreat",
    content:
      "We hosted our annual team building event here and it was fantastic. The facilities are world-class, and the peaceful environment helped our team bond like never before.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    event: "Birthday Celebration",
    content:
      "Celebrated my 50th birthday at Urban Life Retreat. The lawn setup was beautiful, food was delicious, and the staff went above and beyond to make it special.",
    rating: 5,
  },
  {
    name: "Vikram & Family",
    event: "Family Vacation",
    content:
      "The duplex villa was perfect for our extended family stay. Kids loved the pool, and adults enjoyed the serene environment. Truly a hidden gem in Telangana!",
    rating: 5,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-resort mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
            What Our Guests <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
            Real experiences from our valued guests
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 
                         hover:bg-secondary-foreground/10 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-secondary-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
