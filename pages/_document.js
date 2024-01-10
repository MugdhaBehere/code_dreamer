import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> */}
          <link rel="icon" href="../public/favicon.ico" type="image/x-icon" />


          <title>CodeDreamer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
