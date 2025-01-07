import { ApplicationList } from "@/components/ApplicationList"

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Applications</h1>
      <ApplicationList />
    </div>
  )
}

