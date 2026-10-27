import PageHead from '@/components/PageHead/PageHead'
import { useI18n } from '@/shared/i18n/I18nContext'
import ProfileCard from './components/ProfileCard/ProfileCard'
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  const { t } = useI18n()

  return (
    <section className={styles.page}>
      <PageHead title={t.profile.title} />
      <ProfileCard />
    </section>
  )
}

export default ProfilePage
