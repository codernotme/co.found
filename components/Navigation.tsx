"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profiles', label: 'Discover' },
  { href: '/applications', label: 'Applications' },
  { href: '/messages', label: 'Messages' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 glass-effect">
      <Link href="/" className="text-2xl font-bold text-gradient">Co.Found</Link>
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-cyan-400 relative",
              pathname === item.href
                ? "text-cyan-400"
                : "text-gray-400"
            )}
          >
            {item.label}
            {pathname === item.href && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                layoutId="underline"
              />
            )}
          </Link>
        ))}
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 hover-lift",
            },
          }} 
        />
      </div>
    </nav>
  )
}

