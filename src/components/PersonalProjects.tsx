import { motion } from "framer-motion";
import { Play, Image, ArrowUpRight } from "lucide-react";

const placeholderProjects = [
  {
    title: "Project One",
    description: "A personal project showcasing product thinking and execution. Add your video or screenshot here.",
    type: "video" as const,
  },
  {
    title: "Project Two",
    description: "Another hands-on project demonstrating end-to-end product building skills.",
    type: "screenshot" as const,
  },
  {
    title: "Project Three",
    description: "Creative side project exploring new technologies and user experiences.",
    type: "screenshot" as const,
  },
];

const PersonalProjects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-body text-sm uppercase tracking-[0.2em] mb-3">Hands-On</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Personal Projects
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mb-14">
            Side projects and experiments where I build, prototype, and ship real products.
            Add your videos and screenshots to bring these to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholderProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/50 hover:shadow-lg transition-all"
            >
              {/* Placeholder media area */}
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                {project.type === "video" ? (
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <Play size={28} className="text-secondary ml-1" />
                  </div>
                ) : (
                  <Image size={32} className="text-muted-foreground/40" />
                )}
                <span className="absolute top-3 right-3 font-body text-xs uppercase tracking-wider text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center gap-2 group-hover:text-secondary transition-colors">
                  {project.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
