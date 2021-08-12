// Modules Import
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

// CSS Import
import 'css/main.css'
import 'css/base.css'
import 'css/components.css'
import 'css/utilities.css'

// Application Import
import { ExampleProvider } from 'context'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate={router.route === '/' ? 'Gronda' : '%s | Gronda'} />
      <ExampleProvider>
        <Component {...pageProps} />
      </ExampleProvider>
    </>
  )
}

export default MyApp
