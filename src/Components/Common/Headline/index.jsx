import Image from "next/image";
import styles from "src/Components/Common/Headline/Headline.module.css";
import Link from "next/link";

export const Headline = () => {
  return (
    <header className={styles.header}>
      <span className={styles.img}>
        <Image src="/1.png" alt="4Animater logo" width={30} height={30} />
      </span>
      <Link href="/">
        <a className={styles.logo}>4animater</a>
      </Link>
      <p>
        <span className={styles.nextVersion}>beta</span>
      </p>
      <div className={styles.links}>
        <a href="https://animap.vercel.app/">AniMap</a>
      </div>
    </header>
  );
};
