import styles from "src/styles/Work.module.css";
import { useState } from "react";
import { Header } from "src/Components/Common/Header";
import { SelectedYear } from "src/Components/SelectedYear/SelectedYear";
import { WorkList } from "src/Components/WorkList";

export default function Work() {
  const [year, setYear] = useState(2014);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {isShow ? null : <h2>Sorry, Only winter season</h2>}
        <SelectedYear setYear = {setYear} setIsShow = {setIsShow}/>
        {isShow ? <WorkList year={year} /> : null}
      </main>
    </div>
  );
}
