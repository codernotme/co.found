import { Bell } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface NotificationBadgeProps {
  count: number
}

export function NotificationBadge({ count }: NotificationBadgeProps) {
  return (
    <div className="relative inline-block">
      <Bell className="w-6 h-6 text-gray-400" />
      {count > 0 && (
        <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs bg-cyan-400 text-black">
          {count}
        </Badge>
      )}
    </div>
  )
}

