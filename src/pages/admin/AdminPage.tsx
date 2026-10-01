import PageHead from '@/components/PageHead'
import { useI18n } from '@/shared/i18n/I18nContext'
import RolesCard from './components/RolesCard'
import UsersTable from './components/UsersTable'
import styles from './AdminPage.module.css'

const AdminPage = () => {
  const { t } = useI18n()

  return (
    <section className={styles.page}>
      <PageHead title={t.admin.title} subtitle={t.admin.subtitle} />
      <RolesCard />
      <UsersTable />
    </section>
  )
}

export default AdminPage
