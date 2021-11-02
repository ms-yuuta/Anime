import useSWR from "swr";

export const useWorks = (props) => {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("データの取得に失敗したので、データを表示できません");
    }
    const json = await response.json();
    return json.works;
  };

  const { data, error } = useSWR(
    props.obj
      ? `https://api.annict.com/v1/works?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}&filter_season=` +
          props.obj.year +
          "-" +
          props.obj.season +
          "&page=1&sort_watchers_count=desc&per_page=25"
      : null,
    fetcher
  );

  return {
    works: data,
    error,
    isLoading: !data && !error,
  };
};
