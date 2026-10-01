import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'

const Badge = ({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`${styles.badge} ${className}`} {...props} />
}

export default Badge
