import { Header } from '@/components/header';
import { NavBar } from '@/components/nav';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const isLogIn = true;
  return (
    <div style={{ display: "flex", margin: 0 }}>
        {isLogIn?<NavBar />:null}
      <div style={{ width: "100%" }}>
       {isLogIn? <Header />: null}
        <Component {...pageProps} />
      </div>
    </div>
  );
}
