import Link from "next/link";
import styles from "./page.module.css";

import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header title="Welcome to DrawApp" subtitle="Gen your drawings" />

      <div className={styles.homePage}>
        <section className={styles.content}>
          <p>
            This app lets you create your own drawings using a simple canvas.
            Choose your gen style, and start generating based on your lines!
          </p>
          <Link href="/digit-recognizer">
            <button className={styles.startButton}>Get Started</button>
          </Link>
        </section>
      </div>
    </>
  );
}
