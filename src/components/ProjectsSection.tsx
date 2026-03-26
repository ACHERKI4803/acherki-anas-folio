import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import projectCrm from "@/assets/project-crm.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectDonation from "@/assets/project-donation.jpg";
import projectBlog from "@/assets/project-blog.jpg";
import projectAbsence from "@/assets/project-absence.jpg";
import projectStudents from "@/assets/project-students.jpg";

const projects = [
  {
    title: "Application CRM",
    tech: "Symfony · Docker · Jenkins · SonarQube · Ansible",
    description:
      "Application web de gestion des clients et factures avec CI/CD complète : Jenkins, SonarQube, Docker et Ansible pour l'automatisation du déploiement.",
    year: "2025",
    image: projectCrm,
  },
  {
    title: "Prédiction de Consommation d'Eau",
    tech: "IA · .NET · React",
    description:
      "Application intelligente de prédiction de consommation d'eau à partir de données climatiques, utilisant l'intelligence artificielle.",
    year: "2025",
    image: projectWater,
  },
  {
    title: "Site de Dons — stichtingdelink.nl",
    tech: "PHP · WordPress",
    description:
      "Site web néerlandais de dons pour des causes humanitaires, développé en équipe et hébergé sur Namecheap.",
    year: "2024",
    link: "https://www.stichtingdelink.nl",
    image: projectDonation,
  },
  {
    title: "Application Blog",
    tech: "JEE · Bootstrap",
    description:
      "Blog permettant la création, modification et suppression d'articles avec système de commentaires complet.",
    year: "2025",
    image: projectBlog,
  },
  {
    title: "Gestion d'Absence",
    tech: "Laravel · React",
    description:
      "Application de gestion d'absence développée lors d'un stage à SUP-MTI Oujda.",
    year: "2023",
    image: projectAbsence,
  },
  {
    title: "Gestion des Étudiants",
    tech: "C++ · PHP · Java",
    description:
      "Projet de synthèse — application complète de gestion des étudiants réalisée en équipe.",
    year: "2024",
    image: projectStudents,
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
              className="group border border-border rounded-lg overflow-hidden bg-card hover:border-primary/40 transition-all hover:glow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full tracking-widest">
                    {p.year}
                  </span>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 text-foreground/70 hover:text-primary bg-card/60 backdrop-blur-sm p-2 rounded-full transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
                <p className="text-xs text-muted-foreground tracking-wider">{p.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
