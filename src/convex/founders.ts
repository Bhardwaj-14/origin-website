import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let founders = await ctx.db.query("founders").collect();
    
    if (args.category && args.category !== "all") {
      founders = founders.filter(f => f.category === args.category);
    }
    
    return founders;
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    category: v.string(),
    image: v.string(),
    bio: v.string(),
    social: v.optional(v.object({
      twitter: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      github: v.optional(v.string()),
    })),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("founders", args);
  },
});
