import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: { publishedOnly: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    let posts;
    
    if (args.publishedOnly) {
      posts = await ctx.db
        .query("blogPosts")
        .withIndex("by_published", (q) => q.eq("published", true))
        .order("desc")
        .collect();
    } else {
      posts = await ctx.db.query("blogPosts").order("desc").collect();
    }
    
    const postsWithAuthors = await Promise.all(
      posts.map(async (post) => {
        const author = await ctx.db.get(post.authorId);
        return { ...post, author };
      })
    );
    
    return postsWithAuthors;
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    
    if (!post) return null;
    
    const author = await ctx.db.get(post.authorId);
    return { ...post, author };
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    authorId: v.id("users"),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const publishedAt = args.published ? Date.now() : undefined;
    return await ctx.db.insert("blogPosts", { ...args, publishedAt });
  },
});

export const update = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    published: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const post = await ctx.db.get(id);
    
    const patchData: Record<string, any> = { ...updates };
    
    if (updates.published && !post?.published) {
      patchData.publishedAt = Date.now();
    }
    
    return await ctx.db.patch(id, patchData);
  },
});
