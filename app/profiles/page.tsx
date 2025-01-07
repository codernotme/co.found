import { ProfileDisplayCard } from "@/components/ProfileDisplayCard"

const mockProfiles = [
  {
    name: "Alice Johnson",
    role: "founder" as const,
    description: "Visionary entrepreneur looking for a technical co-founder to build the next big thing in AI.",
    tags: ["AI", "Machine Learning", "Startup"],
  },
  {
    name: "Bob Smith",
    role: "developer" as const,
    description: "Full-stack developer with 5 years of experience in React and Node.js. Looking for an exciting startup to join.",
    tags: ["React", "Node.js", "Full-stack"],
  },
  // Add more mock profiles here
]

export default function ProfilesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Discover Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfiles.map((profile, index) => (
          <ProfileDisplayCard key={index} {...profile} />
        ))}
      </div>
    </div>
  )
}

