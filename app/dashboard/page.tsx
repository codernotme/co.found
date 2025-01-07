"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationBadge } from "@/components/NotificationBadge"
import { motion } from "framer-motion"

// import { auth } from "@clerk/nextjs"
// import { redirect } from "next/navigation"

export default function Dashboard() {
  // const { userId } = auth()

  // if (!userId) {
  //   redirect("/sign-in")
  // }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-gradient">Dashboard</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-gray-900 text-white glass-effect hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Your Profile</CardTitle>
              <CardDescription>Complete your profile to get started!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Your profile is 70% complete. Add more details to increase your chances of finding the perfect match!</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="btn-neon">
                <Link href="/profile"><span>Edit Profile</span></Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="bg-gray-900 text-white glass-effect hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Recent Activity</CardTitle>
              <CardDescription>Stay up to date with your latest interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>New application received from John Doe</li>
                <li>Your application to AI Innovate was viewed</li>
                <li>2 new messages in your inbox</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="hover-lift">
                <Link href="/notifications">View All</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
      <motion.div 
        className="mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-4 text-gradient">Quick Actions</h2>
        <div className="flex space-x-4">
          <motion.div variants={itemVariants}>
            <Button asChild className="btn-neon">
              <Link href="/profiles"><span>Discover Profiles</span></Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button asChild variant="outline" className="hover-lift">
              <Link href="/applications">View Applications</Link>
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/notifications">
              <NotificationBadge count={3} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

