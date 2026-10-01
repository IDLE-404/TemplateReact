import type { InputHTMLAttributes } from 'react'
import styles from './Field.module.css'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const Field = ({ label, ...props }: FieldProps) => {
  return (
    <label className={styles.field}>
      {label}
      <input className={styles.input} {...props} />
    </label>
  )
}

export default Field
