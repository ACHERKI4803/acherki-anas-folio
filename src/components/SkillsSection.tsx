import { motion } from "framer-motion";

const categories = [
  {
    title: "Langages",
    items: ["Java", "JavaScript", "PHP", "C#", "C++", "Python"],
  },
  {
    title: "Frameworks & Libs",
    items: ["Spring Boot", "React.js", "Node.js", "Symfony", "Laravel", "ASP.NET", "Bootstrap"],
  },
  {
    title: "DevOps & Outils",
    items: ["Docker", "Jenkins", "Kubernetes", "Ansible", "Git", "SonarQube", "Prometheus", "Grafana", "Postman"],
  },
  {
    title: "Bases de données",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Compétences Techniques</h2>
          <div className="line-accent max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors bg-background/50"
            >
              <h3 className="font-display text-xl text-foreground mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs tracking-wider border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
