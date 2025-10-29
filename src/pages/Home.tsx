import BrutalistButton from "@/components/BrutalistButton";
import BrutalistCard from "@/components/BrutalistCard";
import Console from "@/components/Console";
import Navigation from "@/components/Navigation";
import OriginLogo from "@/components/OriginLogo";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Zap } from "lucide-react";
import { useQuery } from "convex/react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const projects = useQuery(api.projects.list, {})?.slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#36180a] dark:to-[#0f0b05]">
      <Navigation />
      <Console />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "sepia(100%) hue-rotate(10deg) saturate(3)" }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-programmer-working-on-his-laptop-4245-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <OriginLogo size="xl" className="mb-8" />
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-black mb-8 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Engineering the Edge of Intelligence
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <BrutalistButton
                size="lg"
                onClick={() => window.open("https://example.com", "_blank")}
              >
                Support ORIGIN <ArrowRight className="inline ml-2" />
              </BrutalistButton>
              <BrutalistButton
                size="lg"
                variant="secondary"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </BrutalistButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating CTA Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40"
        >
          <BrutalistCard className="p-6 bg-[#FF6A00] text-white max-w-[200px]">
            <h3 className="font-black text-xl mb-4">One Man Army</h3>
            <p className="text-sm mb-4">Building the future, one commit at a time.</p>
            <BrutalistButton
              variant="secondary"
              size="sm"
              onClick={() => navigate("/projects")}
              className="w-full"
            >
              Explore
            </BrutalistButton>
          </BrutalistCard>
        </motion.div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-12 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BrutalistCard onClick={() => navigate("/projects")}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover border-b-4 border-black dark:border-white"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 opacity-80">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#00FF80] text-black text-xs font-bold border-2 border-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <BrutalistButton size="lg" onClick={() => navigate("/projects")}>
              View All Projects <ArrowRight className="inline ml-2" />
            </BrutalistButton>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#FF6A00] dark:bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-12 text-center text-white dark:text-[#FF6A00]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We Lead. We Build. We Dominate.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "AI-First", desc: "Building intelligence from the ground up" },
              { icon: Code, title: "Open Innovation", desc: "Pushing boundaries of what's possible" },
              { icon: Zap, title: "Speed", desc: "Moving faster than the competition" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BrutalistCard className="p-8 bg-white dark:bg-black text-center h-full">
                  <item.icon size={48} className="mx-auto mb-4 text-[#FF6A00]" />
                  <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                  <p className="opacity-80">{item.desc}</p>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BrutalistCard className="p-12 bg-[#00FF80]">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">
              Join the Revolution
            </h2>
            <p className="text-xl mb-8 text-black opacity-80">
              Support ORIGIN in building the future of AI
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BrutalistButton
                size="lg"
                onClick={() => window.open("https://example.com", "_blank")}
              >
                Donate Now
              </BrutalistButton>
              {!isAuthenticated && (
                <BrutalistButton
                  size="lg"
                  variant="secondary"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </BrutalistButton>
              )}
            </div>
          </BrutalistCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <OriginLogo size="sm" className="mb-4" />
          <p className="text-sm opacity-60">
            © 2024 ORIGIN. Engineering the Edge of Intelligence.
          </p>
          <div className="mt-4 flex gap-4 justify-center text-sm">
            <button onClick={() => navigate("/privacy")} className="hover:text-[#FF6A00]">
              Privacy
            </button>
            <button onClick={() => navigate("/terms")} className="hover:text-[#FF6A00]">
              Terms
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}