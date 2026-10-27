import { useEffect, useState, type ReactNode } from 'react'
import { AuthContext, defaultRoles, type User } from '@/shared/auth/AuthContext'

const defaultUsers: User[] = [
  { id: '1', name: 'Admin', email: 'admin@mail.com', password: 'admin', role: 'admin' },
]

const load = <T,>(key: string, fallback: T): T => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(() => load('users', defaultUsers))
  const [roles, setRoles] = useState<string[]>(() => load('roles', defaultRoles))
  const [userId, setUserId] = useState<string | null>(() => load('userId', null))

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('roles', JSON.stringify(roles))
    localStorage.setItem('userId', JSON.stringify(userId))
  }, [users, roles, userId])

  const user = users.find((item) => item.id === userId) ?? null

  const login = (email: string, password: string) => {
    const found = users.find((item) => item.email === email && item.password === password)
    if (found) setUserId(found.id)
    return Boolean(found)
  }

  const register = (name: string, email: string, password: string) => {
    if (users.some((item) => item.email === email)) return false
    const newUser = { id: crypto.randomUUID(), name, email, password, role: 'user' }
    setUsers([...users, newUser])
    setUserId(newUser.id)
    return true
  }

  const logout = () => setUserId(null)

  const addRole = (role: string) => {
    if (role && !roles.includes(role)) setRoles([...roles, role])
  }

  const removeRole = (role: string) => {
    if (defaultRoles.includes(role)) return
    setRoles(roles.filter((item) => item !== role))
    setUsers(users.map((item) => (item.role === role ? { ...item, role: 'user' } : item)))
  }

  const setUserRole = (id: string, role: string) => {
    setUsers(users.map((item) => (item.id === id ? { ...item, role } : item)))
  }

  return (
    <AuthContext.Provider
      value={{ user, users, roles, login, register, logout, addRole, removeRole, setUserRole }}
    >
      {children}
    </AuthContext.Provider>
  )
}
