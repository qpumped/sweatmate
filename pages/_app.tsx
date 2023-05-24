import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Heebo } from '@next/font/google';

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={heebo.className}>
      <Component {...pageProps}/>
    </main>
  );
}
