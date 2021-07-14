import styles from "src/styles/Work.module.css";
import { useCallback, useState } from "react";
import { Header } from "src/Components/Common/Header";
import { WorkList } from "src/Components/WorkList";

export default function Work() {
  const [year, setYear] = useState(2014);
  const [choice, setChoice] = useState(2014);
  const [isShow, setIsShow] = useState(false);

  const handleChange = useCallback((e) => {
    setChoice(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    setYear(choice);
    setIsShow(true);
  }, [choice]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {isShow ? null : <h2>sorry, only Winter season</h2>}
        <div className={styles.select}>
          <select
            className={styles.selectYear}
            value={choice}
            onChange={handleChange}
          >
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
          <button className={styles.button} onClick={handleDisplay}>
            Show
          </button>
        </div>
        {isShow ? <WorkList year={year} /> : null}
      </main>
    </div>
  );
}
