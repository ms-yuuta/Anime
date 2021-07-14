import { useCallback, useEffect, useState } from "react";

export const useNext = () => {
  const [sections, setSections] = useState(dataset);
  const [urls, setURLs] = useState(URL);
  const [array, setArray] = useState([]);
  const [isOpne, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState(sections[0].answers);
  const [question, setQuestion] = useState(sections[0].question);

  const addArray = useCallback((item) => {
    setArray((prevArray) => {
      return [...prevArray, item.id];
    }, []);
  });

  const displayNext = useCallback((e, item) => {
    addArray(item);
    if (item.nextId === 0) {
      setIsOpen(true);
    }
    e.preventDefault();
    setQuestion(sections[item.nextId].question);
    setAnswers(sections[item.nextId].answers);
  }, []);

  useEffect(() => {
    if (isOpne) {
      const url = urls[array[0]][array[1]];
      const isOpenTab = () => window.open(url, "_blank");
      if (!isOpenTab()) {
        window.location.href = url;
      }
      setArray([]);
      setIsOpen(false);
    }
  }, [array]);

  return { array, isOpne, answers, question, displayNext };
};
