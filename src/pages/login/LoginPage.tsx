import Button from '@/components/Button/Button'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <section className={styles.section}>
      <h1>Login</h1>
      <form className={styles.form}>
        <label className={styles.label}>
          Email
          <input className={styles.input} type="email" name="email" required />
        </label>
        <label className={styles.label}>
          Password
          <input className={styles.input} type="password" name="password" required />
        </label>
        <Button type="submit">Sign in</Button>
      </form>
    </section>
  )
}

export default LoginPage