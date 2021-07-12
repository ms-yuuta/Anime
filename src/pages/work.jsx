import styles from "src/Components/Answers/Answers.module.css";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
// import styles from "src/Components/Answers/Answers.module.css"
import Link from "next/link";

export default function Work() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.grid}>
        <Link href="/work_2018">
          <a className={styles.card}>2018 winter-season</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
