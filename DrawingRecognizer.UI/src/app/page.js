import Link from "next/link";
import styles from "./page.module.css";

import Header from "./components/Layout/Header";
import BoxSection from "./components/Layout/BoxSection";

export default function Home() {
  return (
    <>
      <Header title="Welcome to DrawApp" subtitle="Gen your drawings" />

      <div className={styles.homePage}>
        <BoxSection padding="120px 0">

          <p>
            This app lets you create your own drawings using a simple canvas.
            Choose your gen style, and start generating based on your lines!
          </p>
          <Link href="/digit-recognizer">
            <button className={styles.startButton}>Get Started</button>
          </Link>
        </BoxSection>
      </div>
    </>
  );
}
