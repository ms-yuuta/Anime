import styles from "src/styles/Work.module.css";
import { useState } from "react";
import { Selected } from "src/Components/Selected";
import { WorkList } from "src/Components/WorkList";

export default function Work() {
  const [obj, setObj] = useState({ year: 2014, season: "spring" });
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.container}>
      <Selected setObj={setObj} setIsShow={setIsShow} />
      <main className={styles.main}>
        {isShow ? <WorkList obj={obj} /> : null}
      </main>
    </div>
  );
}
