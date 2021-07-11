import styles from "src/Components/Headline/Headline.module.css";

export const Headline = () => {
  return (
    <div className={styles.header}>
      <h2>
        雑なアニメ勧誘 <span className={styles.version}>Alpha</span>
      </h2>
      <p>（スマホで見たら、ブサイクなデザインです）</p>
      <p>beta coming soon....</p>
    </div>
  );
};
