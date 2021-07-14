import styles from "src/Components/WorkList/WorkList.module.css";
import { Header } from "src/Components/Common/Header";
import { useCallback, useEffect, useState } from "react";

export const WorkList = (props) => {
  const [work, setWork] = useState([]);

  const getWork = useCallback(async () => {
    const res = await fetch(
      "https://api.moemoe.tokyo/anime/v1/master/" + props.year + "/1"
    );
    const json = await res.json();
    setWork(json);
  }, [props.year]);

  useEffect(() => {
    console.log("mount")
    getWork();
    return () => console.log("unmount")
  }, [props.year]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.workPage}>
        <h2>{props.year} winter-season</h2>
        <p>total: {work.length}</p>
        <ol>
          {work.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.public_url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.titles}
                >
                  {item.title}
                </a>
                <a
                  href={"https://twitter.com/" + item.twitter_account}
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
