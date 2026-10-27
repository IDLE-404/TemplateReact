import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthTabs from '@/components/AuthTabs/AuthTabs'
import Field from '@/components/Field/Field'
import SocialLogin from '@/components/SocialLogin/SocialLogin'
import SubmitButton from '@/components/SubmitButton/SubmitButton'
import { useAuth } from '@/shared/auth/AuthContext'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  const { login } = useAuth()
  const { t } = useI18n()
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (login(String(data.get('email')), String(data.get('password')))) navigate('/')
    else setError(true)
  }

  return (
    <>
      <AuthTabs />
      <p className={styles.subtitle}>{t.auth.loginSubtitle}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field label={t.auth.email} type="email" name="email" placeholder="you@example.com" required />
        <Field label={t.auth.password} type="password" name="password" placeholder="••••••••" required />
        {error && <p className={styles.error}>{t.auth.loginError}</p>}
        <SubmitButton>{t.auth.signIn}</SubmitButton>
        <SocialLogin />
      </form>
      <p className={styles.footer}>
        {t.auth.noAccount} <Link to="/auth/register">{t.auth.signUp}</Link>
      </p>
    </>
  )
}

export default LoginPage
