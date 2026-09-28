import type { ReactNode } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>{children}</div>
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal