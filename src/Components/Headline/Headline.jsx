import styles from "src/Components/Headline/Headline.module.css";

export const Headline = () => {
  return (
    <div className={styles.header}>
      <h2>
        雑なアニメ勧誘 <span className={styles.version }>Alpha</span>
      </h2>
      <p>（ブサイクなデザインですいません）</p>
      <p><span className = {styles.nextVersion}>beta</span> coming soon....</p>
    </div>
  );
};
