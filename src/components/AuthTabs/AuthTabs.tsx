import { NavLink } from 'react-router-dom'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './AuthTabs.module.css'

const AuthTabs = () => {
  const { t } = useI18n()

  const tabs = [
    { to: '/auth/login', label: t.auth.signIn },
    { to: '/auth/register', label: t.auth.signUp },
  ]

  return (
    <div className={styles.tabs}>
      {tabs.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? `${styles.tab} ${styles.active}` : styles.tab)}
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default AuthTabs
