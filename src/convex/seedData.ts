import { internalMutation } from "./_generated/server";

export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    // Seed projects
    const projects = [
      {
        title: "ORIGIN AI Core",
        summary: "Next-generation AI reasoning engine",
        description: "A revolutionary AI system that pushes the boundaries of machine intelligence. Built from the ground up with novel architectures and training methodologies.",
        category: "AI",
        tags: ["Machine Learning", "Neural Networks", "Research"],
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      },
      {
        title: "ORIGIN OS",
        summary: "Operating system designed for AI-first computing",
        description: "A lightweight, secure OS optimized for AI workloads. Features native AI acceleration and seamless integration with ORIGIN AI Core.",
        category: "OS",
        tags: ["Systems", "Infrastructure", "Performance"],
        imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      },
      {
        title: "Neural Compiler",
        summary: "Compile code directly from natural language",
        description: "Revolutionary compiler that transforms natural language specifications into optimized machine code. Powered by ORIGIN AI.",
        category: "Tools",
        tags: ["Compiler", "AI", "Developer Tools"],
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      },
      {
        title: "Quantum Bridge",
        summary: "Classical-quantum computing interface",
        description: "Research project exploring the intersection of classical and quantum computing paradigms.",
        category: "R&D",
        tags: ["Quantum", "Research", "Innovation"],
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      },
      {
        title: "Edge Intelligence",
        summary: "AI inference at the edge",
        description: "Deploy powerful AI models on edge devices with minimal latency and maximum efficiency.",
        category: "AI",
        tags: ["Edge Computing", "Optimization", "Deployment"],
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      },
      {
        title: "Distributed Training Framework",
        summary: "Scale AI training across thousands of nodes",
        description: "Proprietary framework for distributed AI training with linear scaling and fault tolerance.",
        category: "Tools",
        tags: ["Infrastructure", "Scalability", "Training"],
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      },
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    // Seed founders
    const founders = [
      {
        name: "Bhardwaj Prasad Sutara",
        role: "Founder, CEO",
        category: "Founders",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        bio: "Product and AI Lead",
        social: {
          twitter: "https://twitter.com/origin",
          linkedin: "https://linkedin.com/in/origin",
          github: "https://github.com/origin",
        },
      },
      {
        name: "Alex Chen",
        role: "Founding Engineer",
        category: "Founding Engineers",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        bio: "Systems & infrastructure specialist",
        social: {
          github: "https://github.com/alexchen",
          linkedin: "https://linkedin.com/in/alexchen",
        },
      },
      {
        name: "Sarah Martinez",
        role: "Founding Engineer",
        category: "Founding Engineers",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        bio: "AI research and model architecture",
        social: {
          twitter: "https://twitter.com/sarahm",
          github: "https://github.com/sarahm",
        },
      },
      {
        name: "James Wilson",
        role: "Business Specialist",
        category: "Business Specialists",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        bio: "Growth & operations",
        social: {
          linkedin: "https://linkedin.com/in/jameswilson",
        },
      },
    ];

    for (const founder of founders) {
      await ctx.db.insert("founders", founder);
    }

    return { success: true, message: "Database seeded successfully" };
  },
});
