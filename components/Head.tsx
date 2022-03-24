import NextHead from 'next/head'

import { projectConfig } from '@/utils/config'

interface HeadProps {
  longName?: string
  shortName?: string
  description?: string
  color?: string
}

type HeadDataIconsProps = 'default' | 'image' | 'apple' | '16_16' | '32_32'
type INextHeadIcons = Record<HeadDataIconsProps, string>

const Head: React.FC<HeadProps> = (props) => {
  const {
    longName = projectConfig.longName,
    shortName = projectConfig.shortName,
    description = projectConfig.description,
    color = projectConfig.color,
    children
  } = props

  const icons: INextHeadIcons = {
    image: '/images/Logo.png',
    default: '/icons/favicons/favicon.ico',
    apple: '/icons/favicons/apple-touch-icon.png',
    '16_16': '/icons/favicons/favicon-16x16.png',
    '32_32': '/icons/favicons/favicon-32x32.png'
  }

  return (
    <NextHead>
      <title>
        {props.longName == null
          ? longName
          : props.shortName == null && shortName}
      </title>

      {/* Link Tags */}
      <link rel='shortcut icon' href={icons.default} type='image/x-icon' />
      <link rel='apple-touch-icon' sizes='180x180' href={icons.apple} />
      <link rel='icon' type='image/png' sizes='16x16' href={icons['16_16']} />
      <link rel='icon' type='image/png' sizes='32x32' href={icons['32_32']} />

      {/* Default meta tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      <meta name='Language' content='en' />
      <meta name='theme-color' content={color} />
      <meta name='msapplication-TileColor' content={color} />
      <meta name='copyright' content={shortName} />
      <meta name='author' content={shortName} />
      <meta name='publisher' content={shortName} />
      <meta name='robots' content='index, follow' />
      <meta name='rating' content='general' />
      <meta name='distribution' content='global' />

      {/* Open graph MT */}
      <meta property='og:title' content={shortName} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={projectConfig.url} />
      <meta property='og:image' content={icons.image} />
      <meta property='og:description' content={description} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={longName} />

      {/* Twitter card Metadata */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={longName} />
      <meta name='twitter:image:src' content={icons.image} />

      {children}
    </NextHead>
  )
}

export default Head
