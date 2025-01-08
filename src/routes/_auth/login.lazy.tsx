import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useAuth } from '../../lib/auth'

export const Route = createLazyFileRoute('/_auth/login')({
  component: LoginPage,
})

function LoginPage() {
  const [email, setEmail] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const success = await login(email, pin)
      if (success) navigate({ to: '/verify' })
      else setError('Invalid credentials')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="6-digit PIN"
        maxLength={6}
        required
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded"
      >
        Login
      </button>
    </form>
  )
}
