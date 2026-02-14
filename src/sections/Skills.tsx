import { motion } from "framer-motion";
import { Code, Palette, Wrench, Smartphone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio-data";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  Wrench,
  Smartphone,
};

function SkillCard({
  category,
  icon,
  items,
  index,
}: {
  category: string;
  icon: string;
  items: string[];
  index: number;
}) {
  const IconComponent = iconMap[icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-white font-semibold text-lg">{category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-colors px-3 py-1"
          >
            {item}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-2">My Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Technologies I work with to build modern, responsive, and scalable applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              icon={skill.icon}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
