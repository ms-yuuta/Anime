import styles from "src/styles/globals.css";
import { Headline } from "src/Components/Common/Headline";
import { Footer } from "src/Components/Common/Footer";
import { Header } from "src/Components/Common/Header";
import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Headline />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  );
}
export default MyApp;
