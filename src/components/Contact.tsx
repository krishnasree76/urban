import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Primary Phone",
    value: "+91 91541 56345",
    href: "tel:+919154156345",
  },
  {
    icon: Phone,
    title: "Alternate Phone",
    value: "+91 92479 37789",
    href: "tel:+919247937789",
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
    value:
      "H.No 1-50/M/1, Munganoor Village, Abdullapurmet Mandal, Hayathnagar, Telangana 500070",
    href: "https://maps.google.com/?q=17.2966651,78.6238939",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@urbanliferetreat",
    href: "https://www.instagram.com/urbanliferetreat",
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

    const whatsappNumber = "919154156345";

    const text =
      `*New Enquiry - Urban Life Retreat*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Event:* ${formData.eventType || "Not specified"}%0A` +
      `*Date:* ${formData.date || "Not specified"}%0A` +
      `*Message:* ${formData.message || "No message"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    toast({
      title: "Opening WhatsApp...",
      description: "Please send the pre-filled message to complete your enquiry.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plan Your <span className="text-primary italic">Perfect Event</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to create unforgettable memories? Contact us today via the form or WhatsApp!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6 italic">
              Contact Information
            </h3>

            <div className="grid gap-4 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all group border border-transparent hover:border-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {info.title}
                    </p>
                    <p className="font-medium text-secondary">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Updated Google Map */}
            <div className="rounded-2xl overflow-hidden h-64 border border-primary/10 shadow-inner">
              <iframe
                src="https://www.google.com/maps?q=17.2966651,78.6238939&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
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
            <div className="bg-card border border-primary/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Send WhatsApp Enquiry
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-secondary mb-2">
                    Redirected to WhatsApp
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    If WhatsApp didn't open automatically, please click below.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary underline text-sm"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name *</label>
                      <Input
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-background border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-background border-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event Type</label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, eventType: value })
                        }
                      >
                        <SelectTrigger className="bg-background border-primary/20">
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
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event Date</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="bg-background border-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Special requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="bg-background border-primary/20 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send on WhatsApp
                    <Send className="w-5 h-5" />
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
