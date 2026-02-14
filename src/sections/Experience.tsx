import { motion } from "framer-motion";
import { Building, Calendar, MapPin, CheckCircle2, GraduationCap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { experience, certifications } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-2">My Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent" />

                {/* Experience Items */}
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="relative pl-12"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-zinc-900 border-2 border-violet-500 flex items-center justify-center">
                        <Building className="w-4 h-4 text-violet-400" />
                      </div>

                      {/* Content */}
                      <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/30 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <Badge
                            variant="secondary"
                            className="bg-violet-500/10 text-violet-400 border border-violet-500/20"
                          >
                            Current
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                        </div>

                        <p className="text-zinc-400 text-sm mb-4">{exp.description}</p>

                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Certifications */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-violet-400" />
                Certifications
              </h3>
            </ScrollReveal>

            <StaggerContainer className="space-y-4">
              {certifications.map((cert) => (
                <StaggerItem key={cert.name}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-colors"
                  >
                    <h4 className="text-white font-medium mb-2">{cert.name}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-400">{cert.provider}</span>
                      <span className="text-zinc-500">{cert.date}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
