import MoreLink from '@/components/MoreLink/MoreLink'
import Placeholder from '@/components/Placeholder/Placeholder'
import styles from './FeatureCard.module.css'

type FeatureCardProps = {
  title: string
  text: string
  dark?: boolean
}

const FeatureCard = ({ title, text, dark }: FeatureCardProps) => {
  return (
    <article className={`${styles.card} ${dark ? styles.dark : ''}`} data-reveal="right">
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{text}</p>
        <MoreLink to="/auth/register" />
      </div>
      <Placeholder className={styles.image} />
    </article>
  )
}

export default FeatureCard
