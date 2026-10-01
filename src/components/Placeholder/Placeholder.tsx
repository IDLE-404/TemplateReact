import type { HTMLAttributes } from 'react'
import { FiImage } from 'react-icons/fi'
import styles from './Placeholder.module.css'

const Placeholder = ({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${styles.placeholder} ${className}`} {...props}>
      <FiImage />
    </div>
  )
}

export default Placeholder
