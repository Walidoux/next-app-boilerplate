import type { NextPage } from 'next'
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import NextHead from 'components/NextHead'

import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <main className={styles.application}>
      <NextHead />

      <p className={styles.title}>
        {t('home:title')} <br />
        <span className={styles.subtitle}>{t('home:subtitle')}</span>
      </p>
      <Link href='https://github.com/Walidoux'>
        <a className={styles['redirect-link']} target='_blank'>
          <FiGithub fontSize={20} />
          <span className={styles.text}>{t('common:walidoux-github')}</span>
        </a>
      </Link>
    </main>
  )
}

export default Home
