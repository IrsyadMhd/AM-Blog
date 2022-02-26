import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[url('../public/bg2.jpg')] bg-no-repeat bg-cover">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
