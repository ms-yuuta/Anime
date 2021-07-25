import { useWorks } from "src/hooks/useWorks";
import styles from "src/Components/WorkList/WorkList.module.css";
import { Header } from "src/Components/Common/Header";

export const WorkList = (props) => {
  const { works, error, isLoading } = useWorks(props);

  if (isLoading) {
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
    </div>
  );
};
