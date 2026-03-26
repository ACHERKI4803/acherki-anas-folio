import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "Stage PFE — Ministère de l'Économie et des Finances",
    place: "Rabat, Maroc",
    date: "2025",
  },
  {
    icon: GraduationCap,
    title: "3ᵉ année Cycle Ingénieur — Génie Informatique",
    place: "EHEI, Oujda",
    date: "2023 – Présent",
  },
  {
    icon: Briefcase,
    title: "Stage — Développement Digital, SUP-MTI",
    place: "Oujda",
    date: "2023",
  },
  {
    icon: GraduationCap,
    title: "Technicien Spécialisé — Développement Digital",
    place: "OFPPT, Oujda",
    date: "2021 – 2023",
  },
  {
    icon: GraduationCap,
    title: "Baccalauréat Sciences Physiques",
    place: "Taourirt",
    date: "2021",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Parcours</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">À propos de moi</h2>
          <div className="line-accent max-w-xs mx-auto mb-8" />
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Curieux, motivé et doté d'une grande capacité d'adaptation, je me spécialise en développement Full-Stack
            et je cherche à contribuer activement à des projets innovants dans un environnement collaboratif.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 glow z-10" />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <item.icon size={16} className="text-primary" />
                    <span className="text-xs text-primary tracking-widest uppercase">{item.date}</span>
                  </div>
                  <h3 className="font-display text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.place}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
