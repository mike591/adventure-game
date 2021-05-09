import classnames from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import buttonStyles from 'styles/Button.module.scss';
import homeStyles from 'styles/Home.module.scss';
import pageStyles from 'styles/Page.module.scss';
import textStyles from 'styles/Text.module.scss';

const Home = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/Login');
  };

  return (
    <div className={classnames(homeStyles.Home, pageStyles.Page)}>
      <div className={textStyles.title}>Multiplayer maze game!</div>
      <button
        className={classnames(buttonStyles.button, buttonStyles.primary)}
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default Home;
