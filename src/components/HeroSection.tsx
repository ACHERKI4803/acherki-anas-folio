import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import anasPhoto from "@/assets/anas.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG Image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      {/* Photo en haut à gauche */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="absolute top-8 left-8 z-20"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/30 glow">
          <img
            src={anasPhoto}
            alt="Anas Acherki"
            className="w-full h-full object-cover"
            width={96}
            height={96}
          />
        </div>
      </motion.div>

      <div className="relative z-10 container text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-primary tracking-[0.3em] uppercase text-sm font-body mb-6"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
        >
          Anas <span className="text-gradient">Acherki</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Ingénieur en Développement Informatique · Full-Stack Developer
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/anas-acherki/" },
            { icon: Github, href: "https://github.com/ACHERKI4803" },
            { icon: Mail, href: "mailto:acherki.anas03@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all glow"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Défiler</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
