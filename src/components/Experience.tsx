import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Arka Energy",
    location: "Bangalore",
    role: "Product Manager / Product Owner (SaaS Platform)",
    period: "Jan 2023 – Present",
    highlights: [
      "Own end-to-end product lifecycle for a multi-tenant B2B SaaS platform used by global enterprise and SMB customers.",
      "Authored and shipped 20+ PRDs covering complex, workflow-driven platform capabilities.",
      "Delivered 20+ production releases in under 2 years with ~60% improved release timelines.",
      "Scaled platform adoption to 100+ international customers across US, UK, and Canada.",
      "Designed AI-enabled and rule-based automation to reduce manual workflows.",
    ],
  },
  {
    company: "Arka Energy",
    location: "Bangalore",
    role: "Project Manager (Agile Transformation)",
    period: "Jan 2023 – Present",
    highlights: [
      "Established Agile delivery practices for a 40+ member cross-functional team.",
      "Implemented Jira, sprint planning, retrospectives, and release dashboards from scratch.",
      "Improved delivery predictability, visibility, and cross-team collaboration.",
    ],
  },
  {
    company: "Sunson Energy",
    location: "New Delhi",
    role: "Performance Marketing & Operations",
    period: "Aug 2021 – Dec 2022",
    highlights: [
      "Led performance marketing initiatives on Meta, generating high-quality leads at reduced CPL.",
      "Supported a 10% increase in customer conversions through paid and referral channels.",
      "Organized community-driven initiatives generating 30+ qualified leads from a single event.",
    ],
  },
  {
    company: "The Solar Labs",
    location: "New Delhi",
    role: "Customer Support & QA Engineer (SaaS)",
    period: "Oct 2020 – Jul 2021",
    highlights: [
      "Supported 400+ SaaS customers across India and the Middle East.",
      "Conducted onboarding, training, and webinars; resolved product issues.",
      "Performed manual QA testing to ensure stable and reliable releases.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">Career</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-secondary items-center justify-center">
                  <Briefcase size={14} className="text-secondary-foreground" />
                </div>

                <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="font-body text-secondary font-medium">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="font-body text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="font-body text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-secondary mt-1.5 shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
