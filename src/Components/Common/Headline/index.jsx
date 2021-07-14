import styles from "src/Components/Common/Headline/Headline.module.css";
import Link from "next/link";

export const Headline = () => {
  const LINKS = [
    { href: "/recommend", class: "", title: "Recommend" },
    { href: "/work", class: styles.api, title: "Works" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>4animater</a>
      </Link>
      <div className={styles.links}>
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