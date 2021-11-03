import Image from "next/image";
import styles from "src/Components/Common/Headline/Headline.module.css";
import Link from "next/link";

export const Headline = () => {
  const LINKS = [
    { href: "/recommend", class: "", title: "character" },
    // { href: "/work", class: styles.api, title: "Works" },
  ];

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
        {LINKS.map((link) => {
          return (
            <Link href={link.href} key={link.href}>
              <a className={link.class}>{link.title}</a>
            </Link>
          );
        })}
      </div>
    </header>
  );
};
