import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const applications = [
  {
    id: '1',
    developerName: 'John Doe',
    skills: ['React', 'Node.js', 'Python'],
    message: "I'm excited about the opportunity to work on AI-powered productivity tools...",
    status: 'pending',
  },
  {
    id: '2',
    developerName: 'Jane Smith',
    skills: ['Machine Learning', 'Python', 'TensorFlow'],
    message: "With my background in ML and AI, I believe I can contribute significantly...",
    status: 'accepted',
  },
  // Add more mock applications as needed
]

export function ApplicationList() {
  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <Card key={app.id} className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-xl text-cyan-400">{app.developerName}</CardTitle>
            <CardDescription>
              {app.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="mr-2">
                  {skill}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2">{app.message}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge variant={app.status === 'accepted' ? 'default' : 'outline'}>
              {app.status}
            </Badge>
            <Link href={`/applications/${app.id}`} className="text-cyan-400 hover:underline">
              View Details
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

