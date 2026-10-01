import type { ReactNode } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import styles from './SubmitButton.module.css'

const SubmitButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className={styles.submit} type="submit">
      {children}
      <span>
        <FiArrowRight />
      </span>
    </button>
  )
}

export default SubmitButton
