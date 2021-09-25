import classnames from 'classnames';
import React from 'react';
import GameStyles from 'styles/Game.module.scss';
import pageStyles from 'styles/Page.module.scss';

const Game = () => {
  return (
    <div className={classnames(GameStyles.Setup, pageStyles.Page)}>
      This is the game page!
    </div>
  );
};

export default Game;
