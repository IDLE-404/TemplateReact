import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/login', label: 'Login' },
  { to: '/profile', label: 'Profile' },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        CodeTou
      </NavLink>
      <nav className={styles.nav}>
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header