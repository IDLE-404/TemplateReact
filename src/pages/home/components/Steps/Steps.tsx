import { useState } from 'react'
import Arrows from '@/components/Arrows'
import Badge from '@/components/Badge'
import Title from '@/components/Title'
import { useI18n } from '@/shared/i18n/I18nContext'
import StepCard from '../StepCard'
import styles from './Steps.module.css'

const Steps = () => {
  const { t } = useI18n()
  const [step, setStep] = useState(0)
  const steps = t.home.steps
  const [first, second] = t.home.stepsTitle

  return (
    <section id="how-it-works" className={styles.steps}>
      <div className={styles.head} data-stagger>
        <div data-reveal>
          <Badge>{t.home.stepsBadge}</Badge>
          <Title>
            {first}
            <br />
            {second}
          </Title>
        </div>
        <p className={styles.text} data-reveal>
          {t.home.stepsText}
        </p>
      </div>
      <div className={styles.grid} data-reveal>
        <div className={styles.counter}>
          <div key={step} className={styles.current}>
            <p className={styles.number}>
              0{step + 1}
              <small>/0{steps.length}</small>
            </p>
            <p className={styles.text}>{steps[step].text}</p>
          </div>
          <Arrows
            onPrev={() => setStep((step - 1 + steps.length) % steps.length)}
            onNext={() => setStep((step + 1) % steps.length)}
          />
        </div>
        <StepCard key={step} {...steps[step]} />
        <StepCard key={`next-${step}`} {...steps[(step + 1) % steps.length]} />
      </div>
    </section>
  )
}

export default Steps
