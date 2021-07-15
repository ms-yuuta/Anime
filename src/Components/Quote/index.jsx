import styles from "src/Components/Quote/Quote.module.css";
import { useCallback, useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState({});
  const getFamousQuote = useCallback(async () => {
    const res = await fetch("https://animechan.vercel.app/api/random");
    const json = await res.json();
    console.log(json);
    setQuote(json);
  }, []);

  useEffect(() => {
    getFamousQuote();
  }, []);

  return (
    <div className={styles.quote}>
      <h1>{quote.quote}</h1>
      <p className={styles.quoteInfo}>
        {"chara : " + quote.character + ","} <span>{" "}</span> {"title : " + quote.anime}
      </p>
    </div>
  );
};
