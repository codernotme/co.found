"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/react"
import { Button } from "@/components/ui/button"
import AuthCard from "./Auth-card"

export default function VybeLandingPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`neobrutalism min-h-screen  transition-all duration-300 font-sans`}>
      {/* Hero Section */}
      <header id="home" ref={heroRef} className="container mx-auto px-9 py-40 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6">
            Connect, Collaborate, Create on{" "}
            <motion.span
              className="text-[#ff3b3f] inline-block logo"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
            >
              VYBE
            </motion.span>
          </h1>
          <p className="text-2xl mb-10">The exclusive social hub for PSIT students and mentors.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onOpen}
              className="bg-[#ff3b3f] hover:bg-[#ff8e3c] text-white font-bold py-4 px-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Join Now
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundImage: [
              "radial-gradient(circle, #ff3b3f 10%, transparent 10%)",
              "radial-gradient(circle, #ff3b3f 10%, transparent 10%)",
            ],
            backgroundPosition: ["0% 0%, 100% 100%", "100% 100%, 0% 0%"],
            backgroundSize: ["20px 20px", "30px 30px"],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </header>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="opaque" className="items-center justify-center p-8">
        <ModalContent className="max-w-[600px] border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <ModalBody>
            <AuthCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}