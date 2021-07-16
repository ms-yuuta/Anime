import styles from "src/styles/Work.module.css";
import { useState } from "react";
import { Header } from "src/Components/Common/Header";
import { Selected } from "src/Components/Selected";
import { WorkList } from "src/Components/WorkList";

export default function Work() {
  const [obj, setObj] = useState({ year: 2014, season: "spring" });
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Selected setObj={setObj} setIsShow={setIsShow} />
        {isShow ? <WorkList obj={obj} /> : null}
      </main>
    </div>
  );
}
