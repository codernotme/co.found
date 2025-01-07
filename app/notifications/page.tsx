import { NotificationList } from "@/components/NotificationList"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Notifications</h1>
      <NotificationList />
    </div>
  )
}

