import Image from "next/image";
import styles from "src/Components/Common/Footer/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://note.com/jusho/n/nf90642b2c42f"
        target="_blank"
        rel="noopener noreferrer"
      >
        History of Anime{" "}
        {/* <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span> */}
      </a>
    </footer>
  );
}
