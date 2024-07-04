import { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.FIREBASE_MEASUREMENT_ID}`}></Script>
      <Script id="app-script" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.FIREBASE_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
