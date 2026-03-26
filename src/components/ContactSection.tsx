import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "acherki.anas03@gmail.com", href: "mailto:acherki.anas03@gmail.com" },
  { icon: Phone, label: "+212 708 271 289", href: "tel:+212708271289" },
  { icon: Linkedin, label: "linkedin.com/in/anas-acherki", href: "https://www.linkedin.com/in/anas-acherki/" },
  { icon: Github, label: "github.com/ACHERKI4803", href: "https://github.com/ACHERKI4803" },
  { icon: MapPin, label: "Rabat, Maroc", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Restons en Contact</h2>
          <div className="line-accent max-w-xs mx-auto mb-8" />
          <p className="text-muted-foreground font-body">
            N'hésitez pas à me contacter pour toute opportunité ou collaboration.
          </p>
        </motion.div>

        <div className="space-y-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/40 transition-all group bg-background/50"
            >
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary text-muted-foreground transition-colors">
                <c.icon size={18} />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors font-body">
                {c.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
