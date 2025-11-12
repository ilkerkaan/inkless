import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

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
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    packages: defineTable({
      name: v.string(),
      description: v.string(),
      price: v.number(),
      features: v.array(v.string()),
      isPopular: v.boolean(),
      imageUrl: v.optional(v.string()),
      order: v.number(),
    }),

    blogPosts: defineTable({
      title: v.string(),
      slug: v.string(),
      excerpt: v.string(),
      content: v.string(),
      imageUrl: v.optional(v.string()),
      authorId: v.id("users"),
      published: v.boolean(),
      publishedAt: v.optional(v.number()),
    }).index("by_slug", ["slug"]).index("by_published", ["published"]),

    galleryImages: defineTable({
      title: v.string(),
      beforeImageUrl: v.string(),
      afterImageUrl: v.string(),
      description: v.optional(v.string()),
      order: v.number(),
    }),

    orders: defineTable({
      userId: v.id("users"),
      packageId: v.id("packages"),
      amount: v.number(),
      status: v.string(),
      customerName: v.string(),
      customerEmail: v.string(),
      customerPhone: v.optional(v.string()),
      preferredDate: v.optional(v.string()),
      notes: v.optional(v.string()),
    }).index("by_user", ["userId"]),

    siteContent: defineTable({
      key: v.string(),
      content: v.string(),
    }).index("by_key", ["key"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;