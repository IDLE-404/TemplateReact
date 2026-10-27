import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { useI18n } from '@/shared/i18n/I18nContext'
import Footer from '../Footer/Footer'
import styles from './Cta.module.css'

const Cta = () => {
  const { t } = useI18n()
  const [first, second, third] = t.home.ctaTitle

  return (
    <section className={styles.cta}>
      <video className={styles.video} src="/hero.mp4" autoPlay muted loop playsInline />
      <div className={styles.info} data-stagger>
        <h2 data-reveal>
          {first}
          <br />
          {second} <span className={styles.inline} /> {third}
        </h2>
        <p data-reveal>{t.home.ctaText}</p>
        <Link to="/auth/register" className={styles.button} data-reveal>
          {t.home.ctaButton}
          <span>
            <FiArrowUpRight />
          </span>
        </Link>
      </div>
      <Footer />
    </section>
  )
}

export default Cta
