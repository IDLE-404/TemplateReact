import { useState } from 'react'
import Arrows from '@/components/Arrows'
import Badge from '@/components/Badge'
import Placeholder from '@/components/Placeholder'
import Title from '@/components/Title'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './UseCases.module.css'

const UseCases = () => {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const cases = t.home.useCases
  const current = cases[index]

  return (
    <section id="use-cases" className={styles.useCases}>
      <div className={styles.head} data-reveal>
        <Badge>{t.home.useCasesBadge}</Badge>
        <Title>{t.home.useCasesTitle}</Title>
      </div>
      <div className={styles.card} data-reveal>
        <Placeholder key={`image-${index}`} className={`${styles.image} ${styles.swap}`} />
        <div className={styles.info}>
          <div key={index} className={styles.swap}>
            <h3>{current.title}</h3>
            <p className={styles.text}>{current.text}</p>
          </div>
          <Arrows
            className={styles.arrows}
            onPrev={() => setIndex((index - 1 + cases.length) % cases.length)}
            onNext={() => setIndex((index + 1) % cases.length)}
          />
        </div>
      </div>
    </section>
  )
}

export default UseCases
