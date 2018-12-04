import Document, {Head, Main, NextScript} from 'next/document'

type Props = {

}

export default class MyDocument extends Document<Props> {
  static async getInitialProps (ctx) {
    const initProps = await Document.getInitialProps(ctx)
    console.log(initProps)
    return {...initProps}
  }

  public render () {
    return (
      <html>
        <Head>
          <title>拉勾网</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
