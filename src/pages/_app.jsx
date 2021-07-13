import { Headline } from 'src/Components/Headline'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
