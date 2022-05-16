import Head from 'next/head'

import { projectConfig } from 'utils/config'

interface HeadProps {
  title?: string
}

const NextHead: React.FC<HeadProps> = (props) => {
  const { title = projectConfig.shortName } = props

  return (
    <Head>
      <title>{title}</title>

      <link
        rel='shortcut icon'
        href={projectConfig.icons.default}
        type='image/x-icon'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={projectConfig.icons.apple}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={projectConfig.icons['16_16']}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={projectConfig.icons['32_32']}
      />

      {/* Default meta tags */}

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={projectConfig.description} />
      <meta name='language' content={projectConfig.defaultLocale} />
      <meta name='theme-color' content={projectConfig.color} />
      <meta name='copyright' content={projectConfig.shortName} />
      <meta name='author' content={projectConfig.shortName} />
      <meta name='publisher' content={projectConfig.shortName} />
      <meta name='robots' content='index, follow' />
      <meta name='rating' content='general' />
      <meta name='distribution' content='global' />
      <meta name='msapplication-TileColor' content={projectConfig.color} />

      {/* Open graph MT */}

      <meta property='og:title' content={projectConfig.shortName} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={projectConfig.url} />
      <meta property='og:image' content={projectConfig.icons.image} />
      <meta property='og:description' content={projectConfig.description} />
      <meta
        property='og:locale'
        content={`${
          projectConfig.defaultLocale
        }_${projectConfig.defaultLocale.toUpperCase()}`}
      />
      <meta property='og:site_name' content={projectConfig.longName} />

      {/* Twitter card Metadata */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={projectConfig.description} />
      <meta name='twitter:title' content={projectConfig.longName} />
      <meta name='twitter:image:src' content={projectConfig.icons.image} />
    </Head>
  )
}

export default NextHead
