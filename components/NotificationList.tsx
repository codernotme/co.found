import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for demonstration
const notifications = [
  {
    id: '1',
    title: 'New Application',
    description: 'John Doe has applied to your startup.',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    title: 'Application Update',
    description: 'Your application to AI Innovate has been accepted!',
    timestamp: '1 day ago',
  },
  // Add more mock notifications as needed
]

export function NotificationList() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Card key={notification.id} className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-lg text-cyan-400">{notification.title}</CardTitle>
            <CardDescription className="text-gray-400">{notification.timestamp}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{notification.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

