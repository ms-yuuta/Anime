import styles from "src/Components/RecommendTitle/RecommendTitle.module.css";

export const RecommendTitle = () => {
  return (
    <div className={styles.titleContent}>
      <h2 className={styles.title}>”10秒”で終わらせる適正アニメ</h2>
      <p className={styles.title}>〜独断と偏見なのは許してください〜 </p>
    </div>
  );
};
