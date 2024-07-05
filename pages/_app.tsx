import { lazy } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProps } from 'next/app'
import Script from "next/script";

import 'tailwindcss/tailwind.css'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <>
          <Component {...pageProps} />
          <Analytics />
          <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
          <Script id="app-script" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.FIREBASE_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
            `}
          </Script>
          <SpeedInsights />
        </>
      )}
    </>
  )
}
