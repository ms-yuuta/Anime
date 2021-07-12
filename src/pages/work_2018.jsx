import styles from "src/styles/Home.module.css";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Work() {
  const [work, setWork] = useState([]);

  const getWork = useCallback(async () => {
    const res = await fetch("https://api.moemoe.tokyo/anime/v1/master/2018/1");
    const json = await res.json();
    console.log(json);
    setWork(json);
  }, []);

  // const getTwitter = useCallback(() => {
  //   setTwitter((prevArray) => {
  //     return [...prevArray, "https://twitter.com/" + work.twitter_accout];
  //   });
  // }, []);

  useEffect(() => {
    getWork();
    // getTwitter();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2>2018 winter-season</h2>
        <p>total: {work.length}</p>
        <ol>
          {work.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <a href={item.public_url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </div>
  );
}
