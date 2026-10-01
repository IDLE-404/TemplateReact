import { FcGoogle } from 'react-icons/fc'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './SocialLogin.module.css'

const SocialLogin = () => {
  const { t } = useI18n()

  return (
    <>
      <div className={styles.divider}>{t.auth.or}</div>
      <button className={styles.google} type="button">
        <FcGoogle /> {t.auth.google}
      </button>
    </>
  )
}

export default SocialLogin
