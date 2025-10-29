import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let projects = await ctx.db.query("projects").collect();
    
    if (args.category && args.category !== "all") {
      projects = projects.filter(p => p.category === args.category);
    }
    
    return projects.sort((a, b) => b._creationTime - a._creationTime);
  },
});

export const get = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    summary: v.string(),
    description: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    imageUrl: v.string(),
    videoUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});
