import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getUserByClerkId } from "./_utils";

// Mutation to update user data by Clerk ID
export const update = mutation({
  args: v.object({
    username: v.string(),
    name: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    email: v.string(),
    role: v.optional(v.string()),
    profilecheck: v.optional(v.boolean()),
  }),
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found in the database");
    }

    const updatedFields = {
      ...args
    };

    await ctx.db.patch(user._id, updatedFields);

    return { ...user, ...updatedFields };
  },
});

// Query to get user data by Clerk ID
export const get = query({
  args: v.object({}),
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const currentUser = await getUserByClerkId({
      ctx,
      clerkId: identity.subject,
    });

    if (!currentUser) {
      throw new ConvexError("User not found");
    }

    const user = await ctx.db.get(currentUser._id);

    if (!user) {
      throw new ConvexError("User not found in the database");
    }

    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      imageUrl: user.imageUrl,
      name: user.name,
      role: user.role,
      clerkId: user.clerkId,
    };
  },
});

export const search = query({
  args: v.object({ username: v.string() }),
  handler: async (ctx, { username }) => {
    try {
      const users = await ctx.db
        .query("users")
        .withIndex("by_username", (q) => q.eq("username", username))
        .collect();
      return users.map((user) => ({
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        imageUrl: user.imageUrl,
        role: user.role,
        clerkId: user.clerkId,
      }));
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users.");
    }
  },
});
