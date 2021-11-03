import "src/styles/globals.css";
import { Headline } from "src/Components/Common/Headline";
import { Header } from "src/Components/Common/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Headline />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
