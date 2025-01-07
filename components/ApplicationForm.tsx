"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

export function ApplicationForm() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-neon">
          <span>Apply Now</span>
        </Button>
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white glass-effect">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <DialogHeader>
                <DialogTitle className="text-gradient">Apply for This Opportunity</DialogTitle>
                <DialogDescription>
                  Submit your application to connect with this founder.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="skills" className="text-right">
                      Skills
                    </Label>
                    <Input id="skills" className="col-span-3" placeholder="e.g., React, Node.js, Python" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="offer" className="text-right">
                      Your Offer
                    </Label>
                    <Input id="offer" className="col-span-3" placeholder="e.g., 20% equity, CTO role" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="message" className="text-right">
                      Message
                    </Label>
                    <Textarea id="message" className="col-span-3" placeholder="Why are you a good fit for this opportunity?" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="btn-neon">
                    <span>Submit Application</span>
                  </Button>
                </DialogFooter>
              </form>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}

