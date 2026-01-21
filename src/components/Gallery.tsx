import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

import villaImage from "@/assets/villa2.jpg";
import cottageImage from "@/assets/cottage2.jpg";
import weddingImage from "@/assets/event1.jpg";
import poolImage from "@/assets/swimmingpool.png";
import hallImage from "@/assets/hall.jpg";
import lawnImage from "@/assets/lawn.jpg";

const galleryImages = [
  { src: villaImage, title: "Luxury Duplex Villa" },
  { src: cottageImage, title: "Cozy Cottage" },
  { src: weddingImage, title: "Destination Wedding" },
  { src: poolImage, title: "Swimming Pool" },
  { src: hallImage, title: "Hall" },
  { src: lawnImage, title: "Event Lawn Setup" },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-resort mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Gallery
          </span>
          <h2 className="section-title">
            Explore Our <span className="retreat-text">Beautiful Spaces</span>
          </h2>
          <p className="section-subtitle">
            Take a visual tour of our resort, stay options, and event venues
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300" />

                {/* Title on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p className="text-cream-dark font-semibold text-lg text-center">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 text-cream-dark hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Caption */}
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-dark font-display text-xl text-center px-4">
                {selectedImage.title}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
