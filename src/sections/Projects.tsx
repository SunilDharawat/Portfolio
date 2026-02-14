import { motion } from "framer-motion";
import {
  ExternalLink,
  Smartphone,
  Users,
  DollarSign,
  Building2,
  Hotel,
  ClipboardCheck,
  FileQuestion,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Users,
  DollarSign,
  Building2,
  Hotel,
  ClipboardCheck,
  FileQuestion,
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const IconComponent = iconMap[project.icon] || Smartphone;
  const openProject = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Type Badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant="secondary"
          className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
        >
          {project.type}
        </Badge>
        <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-colors">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Project Link */}
      <div className="pt-4 border-t border-zinc-800">
        <Button
          variant="ghost"
          size="sm"
          className="text-zinc-400 hover:text-violet-400 hover:bg-violet-500/10 p-0 h-auto"
          onClick={() => openProject(project.link)}
        >
          <span>View Details</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-2">My Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Some of my recent work showcasing my skills in web and mobile
              development
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
