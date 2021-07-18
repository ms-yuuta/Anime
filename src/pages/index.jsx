import styles from "src/styles/Home.module.css";
import { Header } from "src/Components/Common/Header";
import { Quote } from "src/Components/Quote";
import Image from "next/image";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.intro}>
          <span className={styles.img}>
            <Image src="/jojos.jpg" alt="jojo image" height={510} width={825} />
          </span>
          <span className={styles.principle}>
            <h1>Anime is our second home.</h1>
          </span>
        </div>
        <Quote />
      </main>
    </div>
  );
}
