import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users Table
  users: defineTable({
    username: v.string(),
    name: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    email: v.string(),
    role: v.optional(v.string()),
    profilecheck: v.optional(v.boolean()),
  })
  .index("by_username", ["username"])
  .index("by_clerkId", ["clerkId"])
  .index("by_email", ["email"]),

   // Define the "requests" table to manage friend requests between users
   requests: defineTable({
    sender: v.id("users"), // The ID of the user sending the request
    receiver: v.id("users"), // The ID of the user receiving the request
  })
    .index("by_receiver", ["receiver"])
    .index("by_receiver_sender", ["receiver", "sender"]),

  // Define the "friends" table to manage friendships between users
  friends: defineTable({
    user1: v.id("users"), // The ID of the first user in the friendship
    user2: v.id("users"), // The ID of the second user in the friendship
    conversationId: v.id("conversations"), // ID of the conversation between the two friends
  })
    .index("by_user1", ["user1"])
    .index("by_user2", ["user2"])
    .index("by_conversationId", ["conversationId"]),

  // Define the "conversations" table to store conversation details
  conversations: defineTable({
    name: v.optional(v.string()), // Optional name of the conversation (e.g., group name)
    isGroup: v.boolean(), // Boolean to indicate if it's a group conversation
    lastSeenMessageId: v.optional(v.id("messages")), // ID of the last seen message in the conversation
  }),

  // Define the "conversationMembers" table to manage members of conversations
  conversationMembers: defineTable({
    memberId: v.id("users"), // The ID of the user who is a member of the conversation
    conversationId: v.id("conversations"), // The ID of the conversation
    lastSeenMessage: v.optional(v.id("messages")), // ID of the last message seen by the user in the conversation
  })
    .index("by_memberId", ["memberId"])
    .index("by_conversationId", ["conversationId"])
    .index("by_memberId_conversationId", ["memberId", "conversationId"]),

  // Define the "messages" table to store messages within conversations
  messages: defineTable({
    conversationId: v.id("conversations"), // ID of the conversation the message belongs to
    senderId: v.id("users"), // ID of the user who sent the message
    content: v.array(v.string()), // Array of strings representing the content of the message (e.g., text, links)
    type: v.string(), // Type of the message (e.g., text, image, etc.)
  }).index("by_conversationId", ["conversationId"]),



});
