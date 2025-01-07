"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

const initialMessages = [
  { id: 1, sender: 'Alice', content: 'Hi there! I saw your profile and I think you&apos;d be a great fit for our startup.' },
  { id: 2, sender: 'Bob', content: 'Thanks Alice! I&apos;m excited to learn more about your project.' },
]

export function ChatInterface() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', content: newMessage }])
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-gray-900 rounded-lg overflow-hidden glass-effect">
      <ScrollArea className="flex-grow p-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-4 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}
            >
              <div className={`inline-block p-2 rounded-lg ${message.sender === 'You' ? 'bg-cyan-400 text-black' : 'bg-gray-800 text-white'}`}>
                <p className="font-bold">{message.sender}</p>
                <p>{message.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="p-4 bg-gray-800">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="btn-neon">
            <span>Send</span>
          </Button>
        </div>
      </form>
    </div>
  )
}

