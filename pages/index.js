import React from "react";
import styles from "styles/Home.module.scss";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/Login");
  };

  return (
    <div className={styles.Home}>
      <h1 className={styles.Home__title}>This is the adventure game!</h1>
      <p className={styles.Home__description}>Using Next JS</p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Home;
