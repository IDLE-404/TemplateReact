import { useState } from 'react'
import Button from '@/components/Button/Button'
import Modal from '@/components/Modal/Modal'
import styles from './HomePage.module.css'

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className={styles.section}>
      <h1>Home</h1>
      <p>Welcome to CodeTou</p>
      <Button onClick={() => setModalOpen(true)}>Open modal</Button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Hello"
      >
        <p>This is a demo modal.</p>
      </Modal>
    </section>
  )
}

export default HomePage