import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">Let's Connect</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Got a product challenge?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-12 max-w-xl mx-auto">
            I'd love to hear about it. Whether it's a collaboration opportunity or just a chat about product — reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:tani.tahseen@gmail.com"
              className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-body font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={20} />
              tani.tahseen@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/taniatahseen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-primary-foreground/20 px-8 py-4 rounded-lg font-body font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/50 font-body text-sm">
            <MapPin size={16} />
            Bangalore, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
