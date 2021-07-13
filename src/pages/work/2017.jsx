import styles from "src/styles/Home.module.css";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Work_2017() {
  const [work, setWork] = useState([]);

  const getWork = useCallback(async () => {
    const res = await fetch("https://api.moemoe.tokyo/anime/v1/master/2017/4");
    const json = await res.json();
    console.log(json);
    setWork(json);
  }, []);

  useEffect(() => {
    getWork();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.workPage}>
        <h2>2017 winter-season</h2>
        <p>total: {work.length}</p>
        <ol>
          {work.map((item) => {
            return (
              <li key={item.id}>
                  <a href={item.public_url} target="_blank" rel="noreferrer" className={styles.titles}>
                    {item.title}
                  </a>
                  <a href={"https://twitter.com/" + item.twitter_account} className={styles.twitter} target="_blank" rel="noreferrer">
                    Twitter
                  </a>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </div>
  );
}
