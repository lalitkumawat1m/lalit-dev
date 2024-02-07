import {ContextProviders} from 'components/_stores/_context-providers';
import {LoadInitialData} from 'components/_stores/_load-initial-data';

import {Footer} from 'components/layout/footer';
import {Header} from 'components/layout/header';
import "styles/tailwind.css";
import type { AppProps } from "next/app";
import {useRouter} from 'next/router';
import {FC, PropsWithChildren, useEffect, useState} from 'react';


const Loaders: FC<PropsWithChildren> = ({children}) => {
  return (
    <ContextProviders>
      <LoadInitialData>{children}</LoadInitialData>
    </ContextProviders>
  );
};


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window) {
      setLoading(false);
      if (process.env.NODE_ENV !== 'development') {
        console.log(
          "%cHEY YOU! I see you sneaking in my code. This Page is custom built by Lalit Kumawat. I mainly used Next.js, TailwindCSS, Typescript, Vercel, and TRPC as the main tech here. It's something I've worked hard on so please do not copy it directly. LEARN FROM IT AND MAKE IT YOUR OWN. Questions? Just drop me an email at lalitkumawat1129@gmail.com! You can find the repo learning purposes for the site here: https://github.com/lalitkumawat1m/lalit-dev",
          'background: rgb(0,0,0);color: #fafafa;font-size: 24px;font-weight: bold;padding: 25px 10px;text-align: center;text-shadow: 2px 2px 0 rgba(45, 45, 45);'
        );
      }
    }
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Loaders>
      <Header />
      <main className="min-h-screen print:!mx-auto print:!w-[1024px]">
        <Component {...pageProps} />
      </main>
      <Footer />
      {/*<Stars />*/}
    </Loaders>
  );
}
