import {} from 'next/app'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nemo - Boilerplate</title>
        <link rel="short icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Swimming in the sea..." />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
