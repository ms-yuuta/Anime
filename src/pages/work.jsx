import styles from "src/styles/Home.module.css";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Work() {
  // const seasons = [2020, 2021];
  const [year, setYear] =useState(2017);

  const handleChange = useCallback((e) => {
    setYear(e.target.value);
  },[])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* <div className={styles.grid}>
          {seasons.map((season) => {
            return (
              <Link href="/works" key={season}>
                <a className={styles.card}>{season} season</a>
              </Link>
            )
          })}
        </div> */}
        <div className={styles.select}>
          <select className={styles.selectYear} value={year} onChange={handleChange}>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
          {/* おそらくこれでは、prefetch機能が効かない（getStaticPropsを使う?) */}
          <Link href={{
            pathname: "work/[year]",
            query: {year: year},
            }}>
            <a>Click Here</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
