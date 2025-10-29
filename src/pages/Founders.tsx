import BrutalistCard from "@/components/BrutalistCard";
import BrutalistButton from "@/components/BrutalistButton";
import Console from "@/components/Console";
import Navigation from "@/components/Navigation";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useQuery } from "convex/react";

export default function Founders() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const founders = useQuery(api.founders.list, {
    category: selectedCategory === "all" ? undefined : selectedCategory,
  });

  const categories = ["all", "Founders", "Founding Engineers", "Business Specialists"];

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
          Our Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-12 opacity-80 max-w-3xl"
        >
          The brilliant minds building the future of AI at ORIGIN.
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

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders?.map((founder, i) => (
            <motion.div
              key={founder._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <BrutalistCard className="overflow-hidden">
                <div className="relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-80 object-cover border-b-4 border-black dark:border-white"
                  />
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#FF6A00] bg-opacity-95 flex flex-col items-center justify-center p-6 text-white border-b-4 border-black"
                  >
                    <p className="text-center mb-6 font-bold">{founder.bio}</p>
                    
                    {founder.social && (
                      <div className="flex gap-4">
                        {founder.social.twitter && (
                          <a
                            href={founder.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white text-black border-2 border-black hover:bg-[#00FF80] transition-colors"
                          >
                            <Twitter size={20} />
                          </a>
                        )}
                        {founder.social.linkedin && (
                          <a
                            href={founder.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white text-black border-2 border-black hover:bg-[#00FF80] transition-colors"
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        {founder.social.github && (
                          <a
                            href={founder.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white text-black border-2 border-black hover:bg-[#00FF80] transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#00FF80] text-black text-xs font-bold border-2 border-black mb-3">
                    {founder.category}
                  </div>
                  <h3 className="text-2xl font-black mb-1">{founder.name}</h3>
                  <p className="text-sm opacity-80">{founder.role}</p>
                </div>
              </BrutalistCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
