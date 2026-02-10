import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const placeholderStudies = [
  {
    title: "Product Teardown: Example App",
    description: "Deep-dive analysis of user flows, monetization strategy, and UX improvements.",
    tag: "Product Teardown",
  },
  {
    title: "SaaS Onboarding Optimization",
    description: "A comprehensive study on reducing time-to-value through onboarding redesign.",
    tag: "Case Study",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">Deep Dives</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mb-14">
            Product teardowns and analyses where I break down real products, identify opportunities,
            and propose strategic improvements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {placeholderStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-secondary/50 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FileText size={22} className="text-secondary" />
                </div>
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {study.tag}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {study.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {study.description}
              </p>
              <span className="inline-flex items-center gap-1 text-secondary font-body text-sm font-medium">
                View PDF <ExternalLink size={14} />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-muted-foreground text-sm text-center mt-10 italic"
        >
          More case studies coming soon — upload your product teardown PDFs to showcase them here.
        </motion.p>
      </div>
    </section>
  );
};

export default CaseStudies;
