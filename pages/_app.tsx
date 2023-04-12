import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import {store} from '../redux/store'
import { Provider } from "react-redux";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    const importTE = async () => {
      (await import("tw-elements" as any)).default;
    };
    importTE();
  }, []);
  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
