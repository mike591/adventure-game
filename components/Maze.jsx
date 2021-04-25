import classnames from 'classnames';
import { getIcon } from 'hooks/usePlayer';
import React from 'react';
import styles from 'styles/Maze.module.scss';

const Maze = ({ maze, player = {} }) => {
  const Icon = getIcon(player);

  return (
    <div className={styles.Maze}>
      {maze?.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className={styles.row}>
            {row.map((cell, cellIdx) => {
              const playAtCell = player.x === cell.x && player.y === cell.y;
              return (
                <div
                  key={cellIdx}
                  className={classnames({
                    [styles.cell]: true,
                    [styles['top-border']]: cell.top,
                    [styles['left-border']]: cell.left,
                    [styles['right-border']]: cell.right,
                    [styles['bottom-border']]: cell.bottom,
                  })}
                >
                  {playAtCell && <Icon color="green" />}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Maze;
