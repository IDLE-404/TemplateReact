import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/shared/auth/AuthContext'

type RequireRoleProps = {
  roles?: string[]
}

const RequireRole = ({ roles }: RequireRoleProps) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/auth/login" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />

  return <Outlet />
}

export default RequireRole
