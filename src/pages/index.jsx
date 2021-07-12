import styles from "src/styles/Home.module.css";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import Link from "next/link";

export default function Index() {
  return (
    <div className={styles.container}>
      <Header />
      <header className={styles.header}>
        <h1>welcome to my page</h1>
        <Link href="/recommend">
          <a>anime judge</a>
        </Link>
        <Link href="/work">
          <a className={styles.api}>Anime API</a>
        </Link>
      </header>
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
