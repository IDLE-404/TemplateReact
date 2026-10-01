import { Link, Outlet, useLocation } from 'react-router-dom'
import LangSwitch from '@/components/LangSwitch'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './AuthLayout.module.css'

const AuthLayout = () => {
  const { pathname } = useLocation()
  const { t } = useI18n()
  const [first, rest] = t.auth.slogan

  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <Link to="/" className={styles.logo}>C</Link>
        <LangSwitch className={styles.lang} />
        <main key={pathname} className={styles.content}>
          <Outlet />
        </main>
      </div>
      <div className={styles.cover}>
        <h2 className={styles.slogan}>
          {first} <span>{rest}</span>
        </h2>
      </div>
    </div>
  )
}

export default AuthLayout
