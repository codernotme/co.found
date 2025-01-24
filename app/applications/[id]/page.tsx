import { ApplicationForm } from "@/components/ApplicationForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for demonstration
const application = {
  id: '1',
  founderName: 'Alice Johnson',
  startupName: 'AI Innovate',
  description: 'We are building the next generation of AI-powered productivity tools.',
  rolesRequired: 'Full-stack Developer, Machine Learning Engineer',
  equityOffered: '10-20%',
}

export default function ApplicationDetail() {
  return (
    <div className="container mx-auto p-4">
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-400">{application.startupName}</CardTitle>
          <CardDescription>Founded by {application.founderName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{application.description}</p>
          <div className="mb-2">
            <strong>Roles Required:</strong> {application.rolesRequired}
          </div>
          <div>
            <strong>Equity Offered:</strong> {application.equityOffered}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Contact Founder</Button>
          <ApplicationForm />
        </CardFooter>
      </Card>
    </div>
  )
}

