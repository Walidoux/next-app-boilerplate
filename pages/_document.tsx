import Document, { Html, Main, NextScript } from 'next/document'

import CommonHead from '@/components/Head/CommonHead'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <CommonHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
