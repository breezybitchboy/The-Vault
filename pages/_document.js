import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Vault – Replica & Vanity Driver’s Licenses</title>
        <meta name="description" content="The Vault offers high-fidelity replica IDs, vanity driver's licenses, and curated digital profiles. Designed for collectors, novelty use, and elite drops." />
        <meta name="keywords" content="replica ID, fake ID, novelty driver's license, quick ID, custom ID, digital profile, realistic ID, state replica, vanity DL" />
        <meta name="author" content="The Vault" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="The Vault – Replica ID & Vanity License Hub" />
        <meta property="og:description" content="Custom-designed replica IDs and vanity licenses for collectors, film props, or educational models." />
        <meta property="og:image" content="/samples/sample-id-1.jpg" />
        <meta property="og:url" content="https://the-vault-jvxad0eq6-jahs-projects-36710aa0.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
