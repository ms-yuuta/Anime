import useSWR from "swr";
import styles from "src/Components/Quote/Quote.module.css";

const fetcher = async (url) => {
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error("エラー")
  }
  const json = await response.json();
  return json;
}

const useQuote = () => {
  const { data, error } = useSWR("https://animechan.vercel.app/api/random", fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const Quote = () => {
  const { data, isLoading, error } = useQuote();
  console.log({data, error})

  if (isLoading) {
    return <div>Now Loading....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.quote}>
      <h1>{data.quote}</h1>
      <p className={styles.quoteInfo}>
        {"chara : " + data.character + ","} <span> </span>{" "}
        {"title : " + data.anime}
      </p>
    </div>
  );
};
