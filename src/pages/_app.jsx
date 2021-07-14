import 'src/styles/globals.css'
import { Headline } from 'src/Components/Common/Headline'
import { Footer } from 'src/Components/Common/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headline />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
