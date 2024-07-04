import { lazy } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProps } from 'next/app'
import { firebase } from '@/lib/firebase/firebaseClient'
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
          <SpeedInsights />
        </>
      )}
    </>
  )
}
