import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthTabs from '@/components/AuthTabs'
import Field from '@/components/Field'
import SocialLogin from '@/components/SocialLogin'
import SubmitButton from '@/components/SubmitButton'
import { useAuth } from '@/shared/auth/AuthContext'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './RegisterPage.module.css'

const RegisterPage = () => {
  const { register } = useAuth()
  const { t } = useI18n()
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (register(String(data.get('name')), String(data.get('email')), String(data.get('password')))) navigate('/')
    else setError(true)
  }

  return (
    <>
      <AuthTabs />
      <p className={styles.subtitle}>{t.auth.registerSubtitle}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field label={t.auth.name} type="text" name="name" placeholder={t.auth.namePlaceholder} required />
        <Field label={t.auth.email} type="email" name="email" placeholder="you@example.com" required />
        <Field label={t.auth.password} type="password" name="password" placeholder="••••••••" required />
        {error && <p className={styles.error}>{t.auth.registerError}</p>}
        <SubmitButton>{t.auth.createAccount}</SubmitButton>
        <SocialLogin />
      </form>
      <p className={styles.footer}>
        {t.auth.haveAccount} <Link to="/auth/login">{t.auth.signIn}</Link>
      </p>
    </>
  )
}

export default RegisterPage
