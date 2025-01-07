"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ProfileDisplayCardProps {
  name: string
  role: "founder" | "developer"
  description: string
  tags: string[]
  avatarUrl?: string
}

export function ProfileDisplayCard({ name, role, description, tags, avatarUrl }: ProfileDisplayCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gray-900 text-white glass-effect hover-lift">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-gradient">{name}</CardTitle>
            <Badge variant="outline" className="mt-1">
              {role === "founder" ? "Founder" : "Developer"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-cyan-400 text-black">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

