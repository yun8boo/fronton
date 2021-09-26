import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/Providers/AuthProvider'
import { Layout } from '@/components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
export default MyApp
