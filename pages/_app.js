import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <title>AluraQuiz</title>
        <meta name="title" content="AluraQuiz" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://acquiz.assoares383.vercel.app/"
        />
        <meta property="og:title" content="AluraQuiz" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://www.hdwallpapers.in/download/eivor_viking_in_assassins_creed_valhalla_2020_game_4k_8k-5120x2880.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://acquiz.assoares383.vercel.app/"
        />
        <meta property="twitter:title" content="AluraQuiz" />
        <meta
          property="twitter:description"
          content="https://www.hdwallpapers.in/download/eivor_viking_in_assassins_creed_valhalla_2020_game_4k_8k-5120x2880.jpg"
        />
        <meta property="twitter:image" content="" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
