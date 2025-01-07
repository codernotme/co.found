import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <main className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Welcome to <span className="text-cyan-400">Co.Found</span>
        </h1>
        <p className="text-2xl mb-8">Connecting Founders with the Right Technical Minds</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

