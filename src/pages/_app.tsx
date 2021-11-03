import "styles/globals.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Headline } from "Components/Common/Headline";
import { Header } from "Components/Common/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Headline />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
