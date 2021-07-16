import styles from "src/Components/Quote/Quote.module.css";
import { useCallback, useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFamousQuote = useCallback(async () => {
    try {
      const res = await fetch("https://animechan.vercel.app/api/random");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json = await res.json();
      setQuote(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getFamousQuote();
  }, []);

  if (loading) {
    return <h1>4animater....</h1>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (quote.anime === undefined) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.quote}>
      <h1>{quote.quote}</h1>
      <p className={styles.quoteInfo}>
        {"chara : " + quote.character + ","} <span> </span>{" "}
        {"title : " + quote.anime}
      </p>
    </div>
  );
};
