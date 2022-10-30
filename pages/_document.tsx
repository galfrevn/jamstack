import Document, { Html, Head, Main, NextScript } from "next/document";

const TITLE = "Galfrevn Hub | Galfré Valentín Portfolio | Blog";
const DESCRIPTION = `Find out all about Galfré Valentín, a fully completed Fullstack Developer from Argentina.
Discover his portfolio and skills... or read his blogs entries, where he uploads some daily problems solutions! 🚀`;
const URL = "https://portfolio-galfrevn.vercel.app"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-p-24">
        <Head>
          {/* GENERAL META TAGS */}
          <meta name="title" content={TITLE} />
          <meta name="description" content={DESCRIPTION} />

          {/* OPEN GRAPH */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={URL} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />

          {/* TWITTER */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={URL} />
          <meta property="twitter:title" content={TITLE} />
          <meta property="twitter:description" content={DESCRIPTION} />
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
