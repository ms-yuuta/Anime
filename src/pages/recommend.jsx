import styles from "src/styles/Recommend.module.css";
import { useCallback, useEffect, useState } from "react";
import { Header } from "src/Components/Common/Header";
import { RecommendTitle } from "src/Components/RecommendTitle";
import { Question } from "src/Components/Question";
import { Choices } from "src/Components/Choices";
import dataset from "src/dataset.json"
import URL from "src/URL.json";

export default function Recommend() {

  const [sections, setSections] = useState(dataset)
  const [urls, setURLs] = useState(URL)
  const [answers, setAnswers] = useState(sections[0].answers);
  const [question, setQuestion] = useState(sections[0].question);
  const [isOpne, setIsOpen] = useState(false);
  const [array, setArray] = useState([]);

  const addArray = useCallback((item) => {
    setArray((prevArray) => {
      return [...prevArray, item.id];
    }, []);
  });

  useEffect(() => {
    if (isOpne) {
      const url = urls[array[0]][array[1]];
      const isOpenTab = () => window.open(url, "_blank");
      if (!isOpenTab()) {
        window.location.href = url;
      }
      setQuestion(sections[0].question);
      setAnswers(sections[0].answers);
      setArray([]);
      setIsOpen(false);
      return;
    }
  }, [array]);

  const displayNext = useCallback((e, item) => {
    addArray(item);
    if (item.nextId === 0) {
      setIsOpen(true);
    }
    e.preventDefault();
    setQuestion(sections[item.nextId].question);
    setAnswers(sections[item.nextId].answers);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div>
        <RecommendTitle />
        <main className={styles.main}>
          <Question question={question} />
          <Choices
            answers={answers}
            displayNext={displayNext}
            addArray={addArray}
          />
          
        </main>
      </div>
    </div>
  );
}
