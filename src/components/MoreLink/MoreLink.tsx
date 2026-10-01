import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { useI18n } from '@/shared/i18n/I18nContext'
import styles from './MoreLink.module.css'

const MoreLink = ({ to }: { to: string }) => {
  const { t } = useI18n()

  return (
    <Link to={to} className={styles.more}>
      {t.common.learnMore}
      <span>
        <FiArrowUpRight />
      </span>
    </Link>
  )
}

export default MoreLink
