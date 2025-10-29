import BrutalistButton from "@/components/BrutalistButton";
import BrutalistCard from "@/components/BrutalistCard";
import Console from "@/components/Console";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { useQuery } from "convex/react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Id<"projects"> | null>(null);
  
  const projects = useQuery(api.projects.list, { 
    category: selectedCategory === "all" ? undefined : selectedCategory 
  });
  const projectDetail = useQuery(
    api.projects.get,
    selectedProject ? { id: selectedProject } : "skip"
  );

  const categories = ["all", "AI", "OS", "R&D", "Tools"];

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
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-12 opacity-80 max-w-3xl"
        >
          Cutting-edge research and development pushing the boundaries of AI and computing.
        </motion.p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <BrutalistButton
              key={cat}
              variant={selectedCategory === cat ? "primary" : "secondary"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </BrutalistButton>
          ))}
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects?.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <BrutalistCard onClick={() => setSelectedProject(project._id)}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover border-b-4 border-black dark:border-white"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#FF6A00] text-white text-xs font-bold border-2 border-black mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 opacity-80">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#00FF80] text-black text-xs font-bold border-2 border-black"
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
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] max-h-[90vh] overflow-y-auto">
          {projectDetail && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-black">
                  {projectDetail.title}
                </DialogTitle>
              </DialogHeader>
              
              <img
                src={projectDetail.imageUrl}
                alt={projectDetail.title}
                className="w-full h-64 object-cover border-4 border-black dark:border-white my-4"
              />

              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#FF6A00] text-white font-bold border-2 border-black">
                  {projectDetail.category}
                </div>

                <p className="text-lg leading-relaxed">{projectDetail.description}</p>

                <div className="flex flex-wrap gap-2">
                  {projectDetail.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#00FF80] text-black font-bold border-2 border-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <BrutalistButton
                    onClick={() => setSelectedProject(null)}
                    variant="secondary"
                  >
                    Close <X className="inline ml-2" size={16} />
                  </BrutalistButton>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
