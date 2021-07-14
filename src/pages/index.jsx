import styles from "src/styles/Home.module.css";
import { Header } from "src/Components/Common/Header";
import { Quote } from "src/Components/Quote";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Quote />
      </main>
    </div>
  );
}
