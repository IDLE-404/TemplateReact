import { useState, type FormEvent } from 'react'
import { FiX } from 'react-icons/fi'
import { defaultRoles, useAuth } from '@/shared/auth/AuthContext'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './RolesCard.module.css'

const RolesCard = () => {
  const { roles, addRole, removeRole } = useAuth()
  const { t } = useI18n()
  const [role, setRole] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addRole(role.trim().toLowerCase())
    setRole('')
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{t.admin.addRole}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={role}
          onChange={(event) => setRole(event.target.value)}
          placeholder="manager"
          required
        />
        <button className={styles.button} type="submit">
          {t.admin.addRole}
        </button>
      </form>
      <div className={styles.chips}>
        {roles.map((item) => (
          <span key={item} className={styles.chip}>
            {item}
            {!defaultRoles.includes(item) && (
              <button onClick={() => removeRole(item)} aria-label={`${t.admin.remove} ${item}`}>
                <FiX />
              </button>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RolesCard
