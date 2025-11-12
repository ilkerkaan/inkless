import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("galleryImages").order("asc").collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    beforeImageUrl: v.string(),
    afterImageUrl: v.string(),
    description: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("galleryImages", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("galleryImages"),
    title: v.optional(v.string()),
    beforeImageUrl: v.optional(v.string()),
    afterImageUrl: v.optional(v.string()),
    description: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

export const remove = mutation({
  args: { id: v.id("galleryImages") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
