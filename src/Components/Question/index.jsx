import styles from "src/Components/Question/Question.module.css";

export const Question = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.question}</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </div>
  );
};
