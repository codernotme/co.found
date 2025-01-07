"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ProfileCreation() {
  useUser()
  const [role, setRole] = useState("")

  const FounderForm = () => (
    <>
      <div className="mb-4">
        <Label htmlFor="startupName">Startup Name</Label>
        <Input id="startupName" placeholder="Enter your startup name" />
      </div>
      <div className="mb-4">
        <Label htmlFor="vision">Vision</Label>
        <Textarea id="vision" placeholder="Describe your startup's vision" />
      </div>
      <div className="mb-4">
        <Label htmlFor="ideaDescription">Idea Description</Label>
        <Textarea id="ideaDescription" placeholder="Describe your startup idea" />
      </div>
      <div className="mb-4">
        <Label htmlFor="rolesRequired">Roles Required</Label>
        <Input id="rolesRequired" placeholder="e.g., Full-stack Developer, UI/UX Designer" />
      </div>
      <div className="mb-4">
        <Label htmlFor="equityTerms">Equity/Terms</Label>
        <Input id="equityTerms" placeholder="Describe equity or terms offered" />
      </div>
    </>
  )

  const DeveloperForm = () => (
    <>
      <div className="mb-4">
        <Label htmlFor="skills">Skills</Label>
        <Input id="skills" placeholder="e.g., React, Node.js, Python" />
      </div>
      <div className="mb-4">
        <Label htmlFor="portfolio">Portfolio</Label>
        <Input id="portfolio" placeholder="Enter your GitHub profile or portfolio URL" />
      </div>
      <div className="mb-4">
        <Label htmlFor="experience">Experience</Label>
        <Textarea id="experience" placeholder="Describe your relevant experience" />
      </div>
      <div className="mb-4">
        <Label htmlFor="expectations">Partnership Expectations</Label>
        <Textarea id="expectations" placeholder="What are you looking for in a partnership?" />
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Create Your Profile</h1>
      <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <Label>Select Your Role</Label>
          <div className="flex space-x-4 mt-2">
            <Button
              onClick={() => setRole("founder")}
              variant={role === "founder" ? "default" : "outline"}
            >
              Founder
            </Button>
            <Button
              onClick={() => setRole("developer")}
              variant={role === "developer" ? "default" : "outline"}
            >
              Developer
            </Button>
          </div>
        </div>

        {role === "founder" && <FounderForm />}
        {role === "developer" && <DeveloperForm />}

        {role && (
          <Button className="w-full mt-4">
            Save Profile
          </Button>
        )}
      </div>
    </div>
  )
}

