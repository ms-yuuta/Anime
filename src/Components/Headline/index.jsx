import styles from "src/Components/Headline/Headline.module.css";
import Link from "next/link";

export const Headline = () => {
  return(
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>4animer</a>
      </Link>
      <div className={styles.links}>
        <Link href="/recommend">
          <a>Recommend</a>
        </Link>
        <Link href="/work">
          <a className={styles.api}>Works</a>
        </Link> 
      </div>
    </header>
  )
};
