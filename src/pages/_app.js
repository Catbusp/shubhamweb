import React from "react";
import Head from "next/head";
import appData from "@data/app.json";
import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
import Script from "next/script";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Content Foundry",
    "url": "https://www.contentfoundry.in/",
    "logo": "https://www.contentfoundry.in/images/logo-main.png",
    "sameAs": [
      "https://www.instagram.com/content_foundry/",
      "https://in.linkedin.com/company/contentfoundry",
      "https://www.youtube.com/@contentfoundry",
      "https://www.contentfoundry.in/"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.contentfoundry.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ourwork",
        "item": "https://www.contentfoundry.in/ourwork"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "pricing",
        "item": "https://www.contentfoundry.in/pricing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.contentfoundry.in/contact"
      }
    ]
  };
  
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{appData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="author" content="bslthemes" />


          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://www.contentfoundry.in/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Top video content creation & production services in delhi ncr - content foundry"/>
          <meta property="og:description" content="Upscale your business with premium video content creation and production services at Content Foundry. Our experts deliver high-quality, engaging videos to enhance your brand's presence."/>
          <meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png"/>

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="contentfoundry.in"/>
          <meta property="twitter:url" content="https://www.contentfoundry.in/"/>
          <meta name="twitter:title" content="Top video content creation & production services in delhi ncr - content foundry"/>
          <meta name="twitter:description" content="Upscale your business with premium video content creation and production services at Content Foundry. Our experts deliver high-quality, engaging videos to enhance your brand's presence."/>
          <meta name="twitter:image" content="https://www.contentfoundry.in/images/logo-main.png"/>

          
          {/* seo end */}     
          <title>Top Video Content Creation & Production Services in Delhi NCR - Content Foundry</title>
          <meta name="description" content="Upscale your business with premium video content creation and production services
          at Content Foundry. Our experts deliver high-quality, engaging videos to enhance your brand&#39;s presence." />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PNP5TPNK');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
