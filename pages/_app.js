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
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
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

        <link
          data-react-helmet="true"
          rel="shortcut icon"
          sizes="16x16 24x24 32x32 48x48 64x64"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/favicon.ico"
        />
        <link
          data-react-helmet="true"
          rel="icon"
          sizes="16x16"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/favicon-16x16.png"
        />
        <link
          data-react-helmet="true"
          rel="icon"
          sizes="96x96"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/favicon-96x96.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-57x57.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-72x72.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-114x114.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-120x120.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-144x144.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-152x152.png"
        />
        <link
          data-react-helmet="true"
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="https://static-dm.akamaized.net/assassins-creed/valhalla/prod/apple-icon-precomposed.png"
        />
        <link
          data-react-helmet="true"
          rel="canonical"
          href="https://www.ubisoft.com/pt-br/game/assassins-creed/valhalla"
          data-ccid="4VkKy62tYUOFAnZeBG8U4s"
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
