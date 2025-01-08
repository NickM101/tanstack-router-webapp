import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useAuth, useRequireAuth } from '../../lib/auth'

export const Route = createLazyFileRoute('/_auth/verify')({
  component: VerifyPage,
})

function VerifyPage() {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { verifyOTP } = useAuth()
  const user = useRequireAuth()

  if (!user) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const success = await verifyOTP(otp)
      if (success) navigate({ to: '/dashboard' })
      else setError('Invalid OTP')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Verification failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        maxLength={6}
        required
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Verify OTP
      </button>
    </form>
  )
}
