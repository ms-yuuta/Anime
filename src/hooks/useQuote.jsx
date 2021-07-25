import useSWR from "swr";

export const useQuote = () => {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("エラーが発生したために、データを表示できません");
    }
    const json = await response.json();
    return json;
  };

  const { data, error } = useSWR(
    "https://animechan.vercel.app/api/random",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};