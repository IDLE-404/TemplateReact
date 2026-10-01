import styles from './StepCard.module.css'

type StepCardProps = {
  tag: string
  title: string
  text: string
}

const StepCard = ({ tag, title, text }: StepCardProps) => {
  return (
    <article className={styles.card}>
      <span className={styles.tag}>{tag}</span>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default StepCard
