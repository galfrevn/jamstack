import "styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast'

// Fonts
import "@fontsource/paytone-one";
import "@fontsource/outfit"

// Routing & Layout
import Router from "next/router";
import Layout from "layouts";

// NProgress bar
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { AnimatePresence } from "framer-motion";

//Binding events.
NProgress.configure({
  showSpinner: false,
  easing: "ease-out",
  trickle: false,
  speed: 300,
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
