import '@/index.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppBar, Footer } from '../components/'
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="root">
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID || ``}>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </div>
  )
}
