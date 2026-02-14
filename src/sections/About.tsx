import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { aboutInfo, personalInfo } from "@/data/portfolio-data";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });
  
  return (
    <div ref={ref} className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
      <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-zinc-400 text-sm">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-violet-400 font-medium mb-2">Get To Know Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Content */}
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {aboutInfo.bio}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-violet-400" />
                <span>Based in {personalInfo.location}</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-violet-400" />
                  <h3 className="text-white font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">{aboutInfo.education.degree}</p>
                  <p className="text-zinc-400">{aboutInfo.education.university}</p>
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {aboutInfo.education.duration}
                    </span>
                    <span>CGPA: {aboutInfo.education.cgpa}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Stats Grid */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {aboutInfo.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <StatCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
