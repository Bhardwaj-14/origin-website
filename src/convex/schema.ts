import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    projects: defineTable({
      title: v.string(),
      summary: v.string(),
      description: v.string(),
      category: v.string(),
      tags: v.array(v.string()),
      imageUrl: v.string(),
      videoUrl: v.optional(v.string()),
    }).index("by_category", ["category"]),

    founders: defineTable({
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
    }).index("by_category", ["category"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;