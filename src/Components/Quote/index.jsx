import { useQuote } from "src/hooks/useQuote";

export const Quote = () => {
  const { data, isLoading, error } = useQuote();

  if (isLoading) {
    return <div>Now Loading....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data.quote}</h1>
      <div>
        <p>{"chara : " + data.character + ","}</p>
        <p>{"title : " + data.anime}</p>
      </div>
    </div>
  );
};
