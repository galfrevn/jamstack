import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-p-24">
        <Head>
          
        </Head>
        <body className="antialiased selection:bg-[#FCBA28] bg-[#0F0D0E] selection:text-[#0F0D0E] ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
