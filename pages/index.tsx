import type { NextPage } from 'next'
import { GitHub } from 'react-feather'
import Link from 'next/link'

import Head from 'components/Head/NextHead'

import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.application}>
      <Head />

      <p className={styles.title}>
        You feel a calming tranquility. <br />
        <span className={styles.subtitle}>
          You&apos;re filled with determination...
        </span>
      </p>
      <Link href='https://github.com/Walidoux'>
        <a className={styles['redirect-link']}>
          <GitHub />
          <span className={styles.text}>Walidoux&apos;s Github</span>
        </a>
      </Link>

      <video autoPlay loop muted playsInline className={styles.video}>
        <source src='/videos/Background.m4v' type='video/mp4; codecs=hvc1' />
        <source src='/videos/Background.webm' type='video/webm; codecs=vp9' />
      </video>
    </main>
  )
}

export default Home
