import styles from "src/Components/Quote/Quote.module.css";
import { useCallback, useEffect, useReducer } from "react";

const initialState = {
  quote: {},
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end": {
      return {
        ...state,
        quote: action.data,
        loading: false,
      };
    }
    case "error": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      throw new Error("such type is none!");
    }
  }
};

export const Quote = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getFamousQuote = useCallback(async () => {
    try {
      const res = await fetch("https://animechan.vercel.app/api/random");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getFamousQuote();
  }, []);

  if (state.loading) {
    return (
      <div>
        <h1>4animater....</h1>
        <p>now,loading</p>
      </div>
    );
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.quote.anime === undefined) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.quote}>
      <h1>{state.quote.quote}</h1>
      <p className={styles.quoteInfo}>
        {"chara : " + state.quote.character + ","} <span> </span>{" "}
        {"title : " + state.quote.anime}
      </p>
    </div>
  );
};
