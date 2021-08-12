// Modules Import
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

// CSS Import
import 'css/main.css'
import 'css/base.css'
import 'css/components.css'
import 'css/utilities.css'

// Application Import
import { StatsProvider } from 'context'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate={router.route === '/' ? 'Gronda' : '%s | Gronda'} />
      <StatsProvider>
        <Component {...pageProps} />
      </StatsProvider>
    </>
  )
}

export default MyApp
