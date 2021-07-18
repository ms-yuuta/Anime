import styles from "src/Components/WorkList/WorkList.module.css";
import { Header } from "src/Components/Common/Header";
import { useCallback, useEffect, useState } from "react";

export const WorkList = (props) => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getWork = useCallback(async () => {
    try {
      const res = await fetch(
        "https://api.annict.com/v1/works?access_token=OLqCiKkm71T6dgIAUfIVzcoKKy81G7S2Tq42gIWKNYg&filter_season=" +
          props.obj.year +
          "-" +
          props.obj.season +
          "&page=1&sort_watchers_count=desc&per_page=25"
      );
      if (!res.ok) {
        console.log("データの取得失敗");
        throw new Error("データの取得に失敗しました。");
      }
      const json = await res.json();
      setWorks(json.works);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [props.obj]);

  useEffect(() => {
    getWork();
  }, [props.obj]);

  if (loading) {
    return <h2>now loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (works.length === 0) {
    return <h2>データは空です</h2>;
  }

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div className={styles.workPage}>
          <h2>
            {props.obj.year} {props.obj.season}-season
          </h2>
          {/* <p>{works.length} works</p> */}
          <ol className={styles.order}>
            {works.map((work) => {
              return (
                <li key={work.id} className={styles.list}>
                  <img
                    src={work.images.recommended_url}
                    height="30%"
                    width="30%"
                    alt="No image..."
                  ></img>
                  <div className={styles.titles}>
                    <a
                      className={styles.title}
                      href={work.official_site_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {work.title}
                    </a>
                  </div>
                  <div>
                    <a
                      className={styles.url}
                      href={work.official_site_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Official Site →
                    </a>
                    <a
                      href={"https://twitter.com/" + work.twitter_username}
                      className={styles.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter →
                    </a>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      )
    </div>
  );
};
