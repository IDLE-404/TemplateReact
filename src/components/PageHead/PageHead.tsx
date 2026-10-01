import styles from './PageHead.module.css'

type PageHeadProps = {
  title: string
  subtitle?: string
}

const PageHead = ({ title, subtitle }: PageHeadProps) => {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default PageHead
