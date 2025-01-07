import { ChatInterface } from "@/components/ChatInterface"

export default function MessagesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Messages</h1>
      <ChatInterface />
    </div>
  )
}

