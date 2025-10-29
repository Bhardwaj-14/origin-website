import BrutalistCard from "@/components/BrutalistCard";
import Console from "@/components/Console";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Brain, Rocket, Target, Zap } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "2024", event: "ORIGIN Founded", desc: "Mission to build AGI systems" },
    { year: "2024 Q2", event: "ORIGIN AI Core", desc: "First AI model released" },
    { year: "2024 Q3", event: "ORIGIN OS Alpha", desc: "Operating system preview" },
    { year: "2024 Q4", event: "Neural Compiler", desc: "Revolutionary dev tool launched" },
    { year: "2025", event: "Global Expansion", desc: "Scaling to new markets" },
  ];

  const values = [
    { icon: Brain, title: "Intelligence First", desc: "AI at the core of everything we build" },
    { icon: Rocket, title: "Move Fast", desc: "Speed is our competitive advantage" },
    { icon: Target, title: "Precision", desc: "Every line of code matters" },
    { icon: Zap, title: "Disrupt", desc: "Challenge the status quo" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#36180a] dark:to-[#0f0b05]">
      <Navigation />
      <Console />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          About ORIGIN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <BrutalistCard className="p-8 md:p-12 bg-[#FF6A00] text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              ORIGIN is engineering the edge of intelligence. We build AI-first systems that push the boundaries of what's possible. No compromises. No limits. Just pure innovation.
            </p>
          </BrutalistCard>
        </motion.div>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BrutalistCard className="p-8 h-full">
                  <value.icon size={48} className="mb-4 text-[#FF6A00]" />
                  <h3 className="text-2xl font-black mb-3">{value.title}</h3>
                  <p className="opacity-80">{value.desc}</p>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i % 2 === 0 ? "md:mr-auto md:w-2/3" : "md:ml-auto md:w-2/3"}
              >
                <BrutalistCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="px-4 py-2 bg-[#00FF80] text-black font-black border-2 border-black shrink-0">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-1">{item.event}</h3>
                      <p className="opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divisions */}
        <section>
          <h2 className="text-4xl md:text-6xl font-black mb-8">Our Divisions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "ORIGIN AI", desc: "Building next-generation AI models and systems" },
              { title: "ORIGIN OS", desc: "Operating system designed for AI-first computing" },
              { title: "ORIGIN R&D", desc: "Exploring the frontiers of technology" },
            ].map((division, i) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BrutalistCard className="p-8 bg-[#0080FF] text-white h-full">
                  <h3 className="text-2xl font-black mb-3">{division.title}</h3>
                  <p>{division.desc}</p>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
