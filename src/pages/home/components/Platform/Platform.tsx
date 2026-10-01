import { FiEye, FiGrid, FiMaximize2 } from 'react-icons/fi'
import Badge from '@/components/Badge'
import MoreLink from '@/components/MoreLink'
import Placeholder from '@/components/Placeholder'
import Title from '@/components/Title'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './Platform.module.css'

const Platform = () => {
  const { t } = useI18n()

  return (
    <section id="platform" className={styles.platform}>
      <Placeholder className={styles.image} data-reveal="scale" />
      <div className={styles.info} data-stagger>
        <Badge data-reveal>{t.home.platformBadge}</Badge>
        <Title data-reveal>{t.home.platformTitle}</Title>
        <div className={styles.icons} data-reveal>
          <span><FiGrid /></span>
          <span><FiEye /></span>
          <span><FiMaximize2 /></span>
        </div>
        <div className={styles.bottom} data-reveal>
          <div>
            <h3>{t.home.platformSubtitle}</h3>
            <p className={styles.text}>{t.home.platformText}</p>
            <MoreLink to="/auth/register" />
          </div>
          <Placeholder className={styles.thumb} />
        </div>
      </div>
    </section>
  )
}

export default Platform
