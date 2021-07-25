import styles from "src/styles/Recommend.module.css";
import { useNext } from "src/hooks/useNext";
import { RecommendTitle } from "src/Components/RecommendTitle";
import { Question } from "src/Components/Question";
import { Choices } from "src/Components/Choices";

export default function Recommend() {
  const { answers, question, displayNext } = useNext();
  return (
    <div className={styles.container}>
      <RecommendTitle />
      <main className={styles.main}>
        <Question question={question} />
        <Choices answers={answers} displayNext={displayNext} />
      </main>
    </div>
  );
}
