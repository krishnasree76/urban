import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 91541 56345",
    href: "tel:+919154156345",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Urbanlife1899@gmail.com",
    href: "mailto:Urbanlife1899@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Save telephone colony, Abdullapurmet Mandal, Munganoor, Hayathnagar_Khalsa, Telangana 500070",
    href: "https://maps.google.com/?q=Urban+Life+Retreat+Telangana",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@urbanliferetreat",
    href: "https://www.instagram.com/urbanliferetreat?igsh=cGJvN3YwcW81ZGp1",
  },
];

const eventTypes = [
  "Destination Wedding",
  "Engagement",
  "Birthday Party",
  "Corporate Event",
  "Family Gathering",
  "Other",
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-resort mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">
            Plan Your <span className="retreat-text">Perfect Event</span>
          </h2>
          <p className="section-subtitle">
            Ready to create unforgettable memories? Contact us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-bold text-secondary mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.title === "Instagram" || info.title === "Address" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium text-secondary">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 border border-primary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8723476729577!2d78.5801!3d17.3236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzI1LjAiTiA3OMKwMzQnNDguNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urban Life Retreat Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border border-primary/10 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-secondary mb-6">
                Send Enquiry
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-secondary mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">
                    Your enquiry has been received. We'll contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Your Name *
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Event Type
                      </label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                      >
                        <SelectTrigger className="bg-background border-primary/20 focus:border-primary">
                          <SelectValue placeholder="Select event" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Event Date
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-background border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your event requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-background border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-golden group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Send Enquiry
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
