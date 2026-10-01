import { useAuth } from '@/shared/auth/AuthContext'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './UsersTable.module.css'

const UsersTable = () => {
  const { users, roles, setUserRole } = useAuth()
  const { t } = useI18n()

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{t.admin.users}</h2>
      <div className={styles.wrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t.admin.name}</th>
              <th>{t.admin.email}</th>
              <th>{t.admin.role}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <select
                    className={styles.select}
                    value={item.role}
                    onChange={(event) => setUserRole(item.id, event.target.value)}
                  >
                    {roles.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable
