import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Application CRM",
    tech: "Symfony · Docker · Jenkins · SonarQube · Ansible",
    description:
      "Application web de gestion des clients et factures avec CI/CD complète : Jenkins, SonarQube, Docker et Ansible pour l'automatisation du déploiement.",
    year: "2025",
  },
  {
    title: "Prédiction de Consommation d'Eau",
    tech: "IA · .NET · React",
    description:
      "Application intelligente de prédiction de consommation d'eau à partir de données climatiques, utilisant l'intelligence artificielle.",
    year: "2025",
  },
  {
    title: "Site de Dons — stichtingdelink.nl",
    tech: "PHP · WordPress",
    description:
      "Site web néerlandais de dons pour des causes humanitaires, développé en équipe et hébergé sur Namecheap.",
    year: "2024",
    link: "https://www.stichtingdelink.nl",
  },
  {
    title: "Application Blog",
    tech: "JEE · Bootstrap",
    description:
      "Blog permettant la création, modification et suppression d'articles avec système de commentaires complet.",
    year: "2025",
  },
  {
    title: "Gestion d'Absence",
    tech: "Laravel · React",
    description:
      "Application de gestion d'absence développée lors d'un stage à SUP-MTI Oujda.",
    year: "2023",
  },
  {
    title: "Gestion des Étudiants",
    tech: "C++ · PHP · Java",
    description:
      "Projet de synthèse — application complète de gestion des étudiants réalisée en équipe.",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Projets Réalisés</h2>
          <div className="line-accent max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border border-border rounded-lg p-6 bg-card hover:border-primary/40 transition-all hover:glow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-primary tracking-widest">{p.year}</span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
              <p className="text-xs text-muted-foreground tracking-wider">{p.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
