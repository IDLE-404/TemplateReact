import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './Hero.module.css'

const Hero = () => {
  const { t } = useI18n()
  const [first, accent, last] = t.home.heroTitle

  return (
    <section className={styles.hero}>
      <video className={styles.video} src="/hero.mp4" autoPlay muted loop playsInline />
      <h1 className={styles.title}>
        {first} <em>{accent}</em>
        <br />
        {last}
      </h1>
      <p className={styles.text}>{t.home.heroText}</p>
    </section>
  )
}

export default Hero
