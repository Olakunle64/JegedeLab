import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteTitle = 'Jegede Laboratory';
  const siteDescription =
    'UC Davis Molecular Biosciences and Environmental Toxicology research laboratory exploring the ecological impacts of pollutants through soil bioindicators.';
  const siteUrl = 'https://agritoxlab.com';
  const socialImage = `${siteUrl}/logo.png`;

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="molecular biosciences, environmental toxicology, soil bioindicators, pollutants, UC Davis, research lab, pesticides, heavy metals, PFAS, microplastics" />
        <meta name="author" content="Jegede Laboratory" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={socialImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={socialImage} />

        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}






