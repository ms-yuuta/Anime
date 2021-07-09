import styles from "src/Components/Main/Main.module.css";
import { Answers } from "src/Components/Answers";
import { Question } from "src/Components/Question";
import { useCallback, useState } from "react";

export const Main = () => {
  const SECTIONS = [
    {
      question: "好きなジャンルは？",
      answers: [
        {
          id: 0,
          nextid: 1,
          title: "スポーツ／競技",
          description: "kafakjf",
        },
        {
          id: 1,
          nextid: 1,
          title: "シリアス／SF",
          description: "fafafa",
        },
        {
          id: 2,
          nextid: 1,
          title: "コメディ／恋愛／青春",
          description: "fafafa",
        },
        {
          id: 3,
          nextid: 1,
          title: "バトル／アクション",
          description: "fafafafeefe",
        },
      ],
    },
    {
      question: "今の気持ちは？",
      answers: [
        {
          id: 0,
          nextid: "https://www.nhk.or.jp/anime/bakuman/1st/outline/index.html",
          title: "勇気（力）をくれ",
          description: "kafakjf",
        },
        {
          id: 1,
          nextid: "http://steinsgate.tv/index.html",
          title: "現実逃避したい",
          description: "fafafa",
        },
        {
          id: 2,
          nextid: "http://tv.violet-evergarden.jp/",
          title: "泣きたい",
          description: "fafafa",
        },
        {
          id: 3,
          nextid: "https://www.marv.jp/special/tokyoghoul/first/index.html",
          title: "エモい",
          description: "fafafafeefe",
        },
      ],
    },
  ];

  const URL = [
    [
      "https://www6.nhk.or.jp/anime/program/detail.html?i=major3",
      "http://ngnl.jp/tv/",
      "https://www.ntv.co.jp/chihayafuru/",
      "https://www.kimiuso.jp/",
    ],
    [
      "https://www.nhk.or.jp/anime/bakuman/1st/outline/index.html",
      "http://steinsgate.tv/index.html",
      "http://tv.violet-evergarden.jp/",
      "https://www.ghibli.jp/works/mononoke/",
    ],
    [
      "http://astra-anime.com/",
      "http://yorimoi.com/",
      "http://taritari.jp/",
      "http://tv.anime-eupho.com/",
    ],
    [
      "https://shingeki.net/#/",
      "https://mahouka.jp/",
      "https://kimetsu.com/",
      "https://www.evangelion.co.jp/",
    ],
  ];

  const [answers, setAnswers] = useState(SECTIONS[0].answers);
  const [question, setQuestion] = useState(SECTIONS[0].question);
  const [array, setArray] = useState([]);

  const addArray = useCallback((id) => {
    setArray((prevArray) => {
      return [...prevArray, id];
    });
  }, []);

  const displayNext = useCallback(
    (e, nextId) => {
      if (/^https?:\/\//.test(nextId)) {
        console.log(array);
        const url = URL[array[0]][array[1]];
        window.open(url, "_blank");
        setQuestion(SECTIONS[0].question);
        setAnswers(SECTIONS[0].answers);
        return;
      }
      console.log(array);
      e.preventDefault();
      setQuestion(SECTIONS[nextId].question);
      setAnswers(SECTIONS[nextId].answers);
    },
    [array]
  );

  console.log(array);

  return (
    <main className={styles.main}>
      <Question question={question} />
      <Answers
        answers={answers}
        displayNext={displayNext}
        addArray={addArray}
      />
    </main>
  );
};
