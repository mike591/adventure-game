import { useRouter } from 'next/router';
import React from 'react';
import styles from 'styles/Home.module.scss';
import pageStyles from 'styles/Page.module.scss';

const Home = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/Login');
  };

  return (
    <div className={(styles.Home, pageStyles.Page)}>
      <h1 className={styles.title}>This is the adventure game!</h1>
      <p className={styles.description}>Using Next JS</p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Home;
