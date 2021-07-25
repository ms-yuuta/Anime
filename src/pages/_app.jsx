import styles from 'src/styles/globals.css'
import { Headline } from 'src/Components/Common/Headline'
import { Footer } from 'src/Components/Common/Footer'
import { Header } from 'src/Components/Common/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Headline />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
