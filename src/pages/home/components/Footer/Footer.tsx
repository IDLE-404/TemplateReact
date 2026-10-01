import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className={styles.footer} data-reveal>
      <div className={styles.row}>
        <span>{t.home.copyright}</span>
        <span>{t.home.rights}</span>
      </div>
      <div className={styles.row}>
        {t.home.footerLinks.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </div>
      <p className={styles.brand} data-reveal>
        CodeTou
      </p>
    </footer>
  )
}

export default Footer
