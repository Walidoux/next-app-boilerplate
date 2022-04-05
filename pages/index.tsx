import type { NextPage } from 'next'

import Head from 'components/Head/NextHead'

import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.application}>
      <Head />

      <p className={styles.message}>Hello Beautiful World of Coding !</p>
      <span className={styles.message}>Some sort of tests</span>
    </main>
  )
}

export default Home
