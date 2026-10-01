import Badge from '@/components/Badge'
import Placeholder from '@/components/Placeholder'
import Title from '@/components/Title'
import { useI18n } from '@/shared/i18n/I18nContext'
import FeatureCard from '../FeatureCard'
import styles from './About.module.css'

const About = () => {
  const { t } = useI18n()
  const [before, after] = t.home.aboutTitle

  return (
    <section id="about" className={styles.about}>
      <div className={styles.info} data-stagger>
        <Badge data-reveal>{t.home.aboutBadge}</Badge>
        <Title data-reveal>
          {before} <span className={styles.inline} /> {after}
        </Title>
        <p className={styles.text} data-reveal>
          {t.home.aboutText}
        </p>
        <div className={styles.thumbs} data-reveal>
          <Placeholder className={styles.thumb} />
          <Placeholder className={styles.thumb} />
        </div>
      </div>
      <div className={styles.features} data-stagger>
        {t.home.features.map((item, index) => (
          <FeatureCard key={index} title={item.title} text={item.text} dark={index === 1} />
        ))}
      </div>
    </section>
  )
}

export default About
