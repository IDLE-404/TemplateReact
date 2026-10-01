import Placeholder from '@/components/Placeholder'
import styles from './Band.module.css'

const Band = () => {
  return (
    <section className={styles.band} data-reveal="scale">
      <Placeholder className={styles.background} />
      <div className={styles.thumbs}>
        <Placeholder className={styles.thumb} />
        <Placeholder className={styles.thumb} />
      </div>
    </section>
  )
}

export default Band
