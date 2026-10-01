import { useAuth } from '@/shared/auth/AuthContext'
import styles from './ProfileCard.module.css'

const ProfileCard = () => {
  const { user } = useAuth()

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{user?.name.charAt(0)}</div>
      <div>
        <div className={styles.row}>
          <h2 className={styles.name}>{user?.name}</h2>
          <span className={styles.badge}>{user?.role}</span>
        </div>
        <p className={styles.email}>{user?.email}</p>
      </div>
    </div>
  )
}

export default ProfileCard
