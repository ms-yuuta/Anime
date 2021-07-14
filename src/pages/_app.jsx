import styles from 'src/styles/globals.css'
import { Headline } from 'src/Components/Common/Headline'
import { Footer } from 'src/Components/Common/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headline />
      <Component {...pageProps} />
      <p>
        <span className={styles.nextVersion}>v0</span> coming soon....
      </p>
      <Footer />
    </>
  )
}

export default MyApp
