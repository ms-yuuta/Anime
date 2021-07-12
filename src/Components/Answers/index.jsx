import styles from "src/Components/Answers/Answers.module.css";

export const Answers = (props) => {
  return (
    <div className={styles.grid}>
      {props.answers.map((item) => {
        return (
          <a
            key={item.title}
            id={item.id}
            className={styles.card}
            onClick={(e) => {
              props.displayNext(e, item);
            }}
          >
            <h2>{item.title}&rarr;</h2>
            {/* <p>{item.description}</p> */}
          </a>
        );
      })}
    </div>
  );
};
