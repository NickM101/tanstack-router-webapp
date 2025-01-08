import { createLazyFileRoute } from '@tanstack/react-router'
import { useRequireVerified } from '../../lib/auth'

export const Route = createLazyFileRoute('/_app/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const user = useRequireVerified()

  if (!user) return null

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome to your dashboard!</p>
    </div>
  )
}
