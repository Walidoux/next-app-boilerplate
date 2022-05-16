import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import useTranslation from 'next-translate/useTranslation'
import Cookies from 'js-cookie'

import '../styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { lang } = useTranslation()

  // 10 years before cookie's expiration
  const COOKIE_EXPIRATION = 10 * 365.25 * 24 * 60 * 60

  useEffect(() => {
    Cookies.set('NEXT_LOCALE', lang, { expires: COOKIE_EXPIRATION })
  }, [lang, COOKIE_EXPIRATION])

  return <Component {...pageProps} />
}

export default MyApp
