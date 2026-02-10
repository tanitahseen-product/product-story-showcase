import { motion } from "framer-motion";

const skills = [
  "Product Strategy & Roadmaps",
  "Product Ownership",
  "Backlog Management",
  "PRDs & User Stories",
  "Agile / Scrum",
  "AI & Automation",
  "Workflow Optimization",
  "User Research",
  "Stakeholder Management",
  "UX Collaboration",
  "Release Management",
  "Product Analytics",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">
            Turning complex problems<br />into scalable products
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl leading-relaxed mb-12">
            SaaS Product Manager with 4+ years of experience building customer-facing platforms from
            discovery to scale. Strong execution as a Product Owner with expertise in roadmap ownership,
            backlog management, AI-enabled automation, and cross-functional delivery. Proven ability to
            translate complex business problems into scalable product solutions while improving release
            velocity, reliability, and adoption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-muted text-muted-foreground font-body text-sm rounded-full border border-border hover:border-secondary hover:text-secondary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
