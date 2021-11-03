import styles from "src/styles/Home.module.css";
import { Quote } from "src/Components/Quote";
import Image from "next/image";
import useSWR from "swr";
import client from "client";

const query = `
  {
    viewer {
      username
      name
    }
  }
`;

const fetcher = (query, client) => {
  return client.request(query);
};

export default function Index() {
  const { data, error } = useSWR([query, client], fetcher);
  if (!data) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <div className={styles.container}>
      Hello {data.viewer.username} !
      <div className={styles.intro}>
        <Image src="/jojos.jpg" alt="jojo image" height={510} width={825} />
        <div className={styles.principle}>
          <h1>Anime is our second home.</h1>
          <p>Even if the universe ends, anime will continue to exist.</p>
        </div>
      </div>
      <Quote />
    </div>
  );
}
