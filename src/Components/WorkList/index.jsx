import styles from "src/Components/WorkList/WorkList.module.css";
import { Header } from "src/Components/Common/Header";
import { useCallback, useEffect, useState } from "react";

export const WorkList = (props) => {
  const [works, setWorks] = useState([]);

  const getWork = useCallback(async () => {
    const res = await fetch(
      "https://api.annict.com/v1/works?access_token=OLqCiKkm71T6dgIAUfIVzcoKKy81G7S2Tq42gIWKNYg&filter_season=" +
        props.obj.year +
        "-" +
        props.obj.season +
        "&page=1&sort_watchers_count=desc"
    );

    const json = await res.json();
    setWorks(json.works);
  }, [props.obj]);

  useEffect(() => {
    console.log("mount");
    getWork();
    return () => console.log("unmount");
  }, [props.obj]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.workPage}>
        <h2>
          {props.obj.year} {props.obj.season}-season
        </h2>
        <p>total: {works.length}</p>
        <ol className={styles.order}>
          {works.map((work) => {
            return (
              <li key={work.id} className={styles.list}>
                <img
                  src={work.images.recommended_url}
                  height="30%"
                  width="30%"
                  alt="No image"
                ></img>
                <div className={styles.titles}>
                  <a
                    href={work.official_site_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {work.title}
                  </a>
                </div>
                <a
                  href={"https://twitter.com/" + work.twitter_username}
                  className={styles.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
