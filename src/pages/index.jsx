import styles from "src/styles/Home.module.css";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import { Main } from "src/Components/Main";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
