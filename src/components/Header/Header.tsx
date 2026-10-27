import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight, FiLogOut } from 'react-icons/fi'
import LangSwitch from '@/components/LangSwitch/LangSwitch'
import { useAuth } from '@/shared/auth/AuthContext'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './Header.module.css'

const Header = () => {
  const { user, logout } = useAuth()
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setHidden(current > lastScroll.current && current > 120)
      setScrolled(current > 40)
      lastScroll.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pages = [
    { to: '/', label: t.header.home, show: true },
    { to: '/profile', label: t.header.profile, show: Boolean(user) },
    { to: '/admin', label: t.header.admin, show: user?.role === 'admin' },
  ]

  const sections = [
    { href: '/#about', label: t.header.about },
    { href: '/#platform', label: t.header.platform },
    { href: '/#how-it-works', label: t.header.howItWorks },
    { href: '/#use-cases', label: t.header.useCases },
  ]

  const close = () => setOpen(false)

  return (
    <header
      className={`${styles.header} ${open ? styles.open : ''} ${hidden && !open ? styles.hidden : ''} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.bar}>
        <Link to="/" className={styles.logo} onClick={close}>
          CodeTou
        </Link>

        <div className={styles.menu}>
          <div className={styles.menuInner}>
            <nav className={styles.nav}>
              {pages
                .filter((item) => item.show)
                .map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end
                    onClick={close}
                    className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
                  >
                    {label}
                  </NavLink>
                ))}
              {sections.map(({ href, label }) => (
                <a key={href} href={href} className={styles.link} onClick={close}>
                  {label}
                </a>
              ))}
            </nav>

            <div className={styles.actions}>
              <LangSwitch className={styles.lang} />
              {user ? (
                <>
                  <span className={styles.user}>
                    {user.name} <small>{user.role}</small>
                  </span>
                  <button className={styles.icon} onClick={logout} aria-label={t.header.logout}>
                    <FiLogOut />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/auth/login" className={styles.secondary} onClick={close}>
                    {t.header.signIn}
                  </Link>
                  <Link to="/auth/register" className={styles.primary} onClick={close}>
                    {t.header.getStarted}
                    <span className={styles.arrow}>
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label={t.header.menu} aria-expanded={open}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
