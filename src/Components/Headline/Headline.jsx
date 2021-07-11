import styles from "src/Components/Headline/Headline.module.css";

export const Headline = () => {
  return (
    <div className={styles.header}>
      <h2 className = {styles.title}>
        ”10秒”で終わらせる適正アニメ<span className={styles.version }>Alpha</span>
      </h2>
      <p className = {styles.title}>〜独断と偏見なのは許してください〜 </p>
      <p>（ブサイクなデザインですいません）</p>
    </div>
  );
};
