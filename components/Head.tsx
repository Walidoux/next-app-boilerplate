import NextHead from 'next/head'

const Head: React.FC = () => {
  const data = {
    title: process.env.NEXT_PUBLIC_PROJECT_NAME,
    description: process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION,
    image: '/images/icons/64x64.png',
    url: 'https://urlwebsite.fr/'
  }

  return (
    <NextHead>
      <title>{data.title}</title>

      <link rel='icon' type='image/png' href={data.image} />
      <link rel='apple-touch-icon' href={data.image} />

      {/* Meta Tag */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={data.description} />
      <meta name='Language' content='fr, en' />
      <meta name='theme-color' content='#27B05E' />

      {/* Open Graph Metadata */}
      <meta property='og:title' content={data.title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={data.url} />
      <meta property='og:image' content={data.image} />
      <meta property='og:description' content={data.description} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={data.title} />

      {/* Twitter card Metadata */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={data.description} />
      <meta name='twitter:title' content={data.title} />
      <meta name='twitter:image:src' content={data.image} />
    </NextHead>
  )
}

export default Head
