import Head from "next/head";

export const Header = () => {
  return (
    <Head>
      <title>4animater</title>
      <meta property="og:title" content="4animater" />
      <meta property="og:description" content="For all those involved in Anime" />
      <meta property="og:image" content="/logo.png" />
      <meta name="twitter:card" content="summarry" />
      <link rel="icon" href="/logo.png" />
    </Head>
  );
}