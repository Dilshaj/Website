import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "./responsive.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Dilshaj Infotech - Digital Agency & Personal Portfolio",
  description: "Elevate your digital presence with Dilshaj Infotech - dynamic and stylish HTML template designed for creative agencies and personal brands. With modern layouts, smooth interactions and a polished aesthetic, Rayo template helps showcase projects, services and expertise with clarity and impact.",
  keywords: "mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean",
  authors: [{ name: "mix_design" }],
  openGraph: {
    title: "Dilshaj Infotech - Digital Agency & Personal Portfolio",
    description: "Elevate your digital presence with Dilshaj Infotech - dynamic and stylish HTML template designed for creative agencies and personal brands. With modern layouts, smooth interactions and a polished aesthetic, Rayo template helps showcase projects, services and expertise with clarity and impact.",
    images: ["/img/og-image.html"],
  },
  icons: {
    icon: "/img/drlogo.png",
    apple: "/img/drlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Template Styles */}
        <link rel="stylesheet" type="text/css" href="/css/loaders/loader.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.min.css" />

        {/* Custom Browser Color */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAF7F6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#161616" />
        <meta name="msapplication-navbutton-color" content="#161616" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <style dangerouslySetInnerHTML={{
          __html: `
          [color-scheme=dark] {
            --accent: #6f60f1;
          }

          .float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            left: 40px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            z-index: 100;
          }

          .my-float {
            margin-top: 16px;
          }

          .btn-default i {
            font-size: 2.6rem;
            overflow: hidden;
            display: none;
          }

          .hidden {
            display: none;
            transition: all 0.4s ease-in-out;
          }

          .mxd-res-list__descr p {
            margin: 6px 0 0;
            font-size: 15px;
            color: #555;
          }

          .toggle-btn:hover {
            color: #3A7BD5;
            transition: 0.3s ease;
          }

          .footer-socials {
            list-style: none;
            padding: 0;
            margin: 15px 0;
          }

          .footer-socials__item {
            margin: 8px 0;
          }

          .footer-socials__link {
            text-decoration: none;
            color: #111;
            font-size: 15px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
          }

          .footer-socials__link i {
            font-size: 30px;
            color: #6b70ff;
            transition: all 0.3s ease;
          }

          .footer-socials__link:hover {
            color: #6b70ff;
            transform: translateX(4px);
          }

          .footer-socials__link:hover i {
            color: #9b5cff;
          }
        `}} />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Load Scripts */}
        <Script src="/js/libs.min.js" strategy="beforeInteractive" />
        <Script src="/js/app.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
