import { createContext, useContext } from 'react'

export type User = {
  id: string
  name: string
  email: string
  password: string
  role: string
}

type AuthContextValue = {
  user: User | null
  users: User[]
  roles: string[]
  login: (email: string, password: string) => boolean
  register: (name: string, email: string, password: string) => boolean
  logout: () => void
  addRole: (role: string) => void
  removeRole: (role: string) => void
  setUserRole: (id: string, role: string) => void
}

export const defaultRoles = ['admin', 'user']

export const AuthContext = createContext<AuthContextValue | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
