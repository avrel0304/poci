import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Es Teh Poci',
  description: 'Es Teh Poci terbukti telah bermitra dengan lebih dari 8000 Juragan Es Teh Poci aktif di seluruh Indonesia sejak 2007 dan penjualan lebih dari 30.000.000++ juta cup per bulannya',
  openGraph: {
    title: 'Es Teh Poci',
    description: 'Es Teh Poci terbukti telah bermitra dengan lebih dari 8000 Juragan Es Teh Poci aktif di seluruh Indonesia sejak 2007 dan penjualan lebih dari 30.000.000++ juta cup per bulannya',
    images: 'https://estehpoci.id/img/favicon.ico',
    url: 'https://estehpoci.id',
    type: 'website',
  },
  keywords: 'teh poci, franchise, mitra',
  icons: {
    icon: '/img/favicon.ico',
    apple: '/img/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-pt-14">
      <head>
        {/* Menggunakan file CSS dari folder public */}
        <link rel="stylesheet" href="/css/style.css?v=2" />
        <link href="/css/swiper.bundle.min.css" rel="stylesheet" />
      </head>
      <body>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-T7RSJBX5");
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7RSJBX5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <div id="content">
          {children}
        </div>
        
        <a
          title="Hubungi Kami via WhatsApp"
          rel="nofollow"
          href="https://api.whatsapp.com/send?phone=6285176739173&text=Halo Es Teh Poci, saya tertarik menjadi Juragan Es Teh Poci."
          style={{ position: 'fixed', bottom: '50px', right: '50px' }}
        >
          <img src="/img/whatsapp.png" width="50" alt="WhatsApp" />
        </a>
      </body>
    </html>
  )
}