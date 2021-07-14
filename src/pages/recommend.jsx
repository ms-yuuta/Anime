import styles from "src/styles/Recommend.module.css";
import { useCallback, useEffect, useState } from "react";
import { Header } from "src/Components/Common/Header";
import { RecommendTitle } from "src/Components/RecommendTitle";
import { Question } from "src/Components/Question";
import { Choices } from "src/Components/Choices";

export default function Recommend() {
  const SECTIONS = [
    {
      question: "好きなジャンルは？",
      answers: [
        {
          id: 0,
          nextId: 1,
          title: "スポーツ／競技",
          description: "kafakjf",
        },
        {
          id: 1,
          nextId: 1,
          title: "シリアス／SF",
          description: "fafafa",
        },
        {
          id: 2,
          nextId: 1,
          title: "コメディ／恋愛／青春",
          description: "fafafa",
        },
        {
          id: 3,
          nextId: 1,
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
          nextId: 0,
          title: "勇気（力）をくれ",
          description: "kafakjf",
        },
        {
          id: 1,
          nextId: 0,
          title: "現実逃避したい",
          description: "fafafa",
        },
        {
          id: 2,
          nextId: 0,
          title: "泣きたい",
          description: "fafafa",
        },
        {
          id: 3,
          nextId: 0,
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
  const [isOpne, setIsOpen] = useState(false);
  const [array, setArray] = useState([]);

  const addArray = useCallback((item) => {
    setArray((prevArray) => {
      return [...prevArray, item.id];
    }, []);
  });

  useEffect(() => {
    if (isOpne) {
      const url = URL[array[0]][array[1]];
      const isOpenTab = () => window.open(url, "_blank");
      if (!isOpenTab()) {
        window.location.href = url;
      }
      setQuestion(SECTIONS[0].question);
      setAnswers(SECTIONS[0].answers);
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
    setQuestion(SECTIONS[item.nextId].question);
    setAnswers(SECTIONS[item.nextId].answers);
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
          <p>
            <span className={styles.nextVersion}>beta</span> coming soon....
          </p>
        </main>
      </div>
    </div>
  );
}
