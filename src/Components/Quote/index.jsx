import { useQuote } from "src/hooks/useQuote";
import styles from "src/Components/Quote/Quote.module.css";

export const Quote = () => {
  const { data, isLoading, error } = useQuote();

  if (isLoading) {
    return <div>Now Loading....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.quote}>
      <h1>{data.quote}</h1>
      <div className={styles.quoteInfo}>
        <p>{"chara : " + data.character + ","}</p>
        <p>{"title : " + data.anime}</p>
      </div>
    </div>
  );
};
