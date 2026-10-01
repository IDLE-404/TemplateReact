import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './Arrows.module.css'

type ArrowsProps = {
  onPrev: () => void
  onNext: () => void
  className?: string
}

const Arrows = ({ onPrev, onNext, className = '' }: ArrowsProps) => {
  const { t } = useI18n()

  return (
    <div className={`${styles.arrows} ${className}`}>
      <button onClick={onPrev} aria-label={t.common.previous}>
        <FiArrowLeft />
      </button>
      <button className={styles.dark} onClick={onNext} aria-label={t.common.next}>
        <FiArrowRight />
      </button>
    </div>
  )
}

export default Arrows
