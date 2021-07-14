import styles from "src/styles/Work.module.css";
import { useCallback, useState } from "react";

export const SelectedYear = (props) => {
  const [choice, setChoice] = useState(2014);

  const handleChange = useCallback((e) => {
    setChoice(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    props.setYear(choice);
    props.setIsShow(true);
  }, [choice]);

  return (
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
  );
}
