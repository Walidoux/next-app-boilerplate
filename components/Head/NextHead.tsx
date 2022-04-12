import Head from 'next/head'

import { projectConfig } from 'utils/config'

interface HeadProps {
  longName?: string
  shortName?: string
}

const NextHead: React.FC<HeadProps> = (props) => {
  const {
    longName = projectConfig.longName,
    shortName = projectConfig.shortName
  } = props

  return (
    <Head>
      <title>
        {props.longName == null
          ? longName
          : props.shortName == null && shortName}
      </title>

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}

export default NextHead
