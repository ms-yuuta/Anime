import styles from "src/Components/Selected/Selected.module.css";
import { useCallback, useState } from "react";

export const Selected = (props) => {
  const [choice, setChoice] = useState({ year: 2014, season: "spring" });

  const handleChange = useCallback((e) => {
    if (isNaN(e.target.value)) {
      setChoice((prevObj) => {
        return { year: prevObj.year, season: e.target.value };
      });
    } else {
      setChoice((prevObj) => {
        return { year: e.target.value, season: prevObj.season };
      });
    }
  }, []);

  const handleDisplay = useCallback(() => {
    props.setObj(choice);
    props.setIsShow(true);
  }, [choice]);

  return (
    <div className={styles.select}>
      <select
        className={styles.selectYear}
        value={choice.year}
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
      <select
        className={styles.selectYear}
        value={choice.season}
        onChange={handleChange}
      >
        <option value="spring">spring</option>
        <option value="summer">summer</option>
        <option value="autumn">autumn</option>
        <option value="winter">winter</option>
      </select>
      <button className={styles.button} onClick={handleDisplay}>
        Show
      </button>
    </div>
  );
};
