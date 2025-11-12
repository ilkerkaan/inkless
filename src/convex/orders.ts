import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { getCurrentUser } from "./users";

export const create = mutation({
  args: {
    packageId: v.id("packages"),
    amount: v.number(),
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.optional(v.string()),
    preferredDate: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    
    if (!user) {
      throw new Error("Must be authenticated to create an order");
    }
    
    return await ctx.db.insert("orders", {
      userId: user._id,
      status: "pending",
      ...args,
    });
  },
});

export const myOrders = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);
    
    if (!user) {
      return [];
    }
    
    const orders = await ctx.db
      .query("orders")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .order("desc")
      .collect();
    
    const ordersWithPackages = await Promise.all(
      orders.map(async (order) => {
        const pkg = await ctx.db.get(order.packageId);
        return { ...order, package: pkg };
      })
    );
    
    return ordersWithPackages;
  },
});
