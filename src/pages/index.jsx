import styles from "src/styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";
import { Header } from "src/Components/Header";
import { Footer } from "src/Components/Footer";

export default function Index() {

  const [quote, setQuote] = useState({});

  const getFamousQuote = useCallback(async() => {
    const res = await fetch("https://animechan.vercel.app/api/random");
    const json = await res.json();
    console.log(json);
    setQuote(json);
  },[])

  useEffect(()=> {
    getFamousQuote();
  },[])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.quote}>
          <h1>{quote.quote}</h1>
          <p className={styles.quoteInfo}>{"chara : " + quote.character + "," }　{" "} {"title : " + quote.anime}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
