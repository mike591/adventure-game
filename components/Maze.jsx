import React from "react";
import styles from "styles/Maze.module.scss";
import classnames from "classnames";

const Maze = ({ maze, player = {} }) => {
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
                    [styles["top-border"]]: cell.top,
                    [styles["left-border"]]: cell.left,
                    [styles["right-border"]]: cell.right,
                    [styles["bottom-border"]]: cell.bottom,
                  })}
                >
                  {playAtCell && (
                    <div
                      style={{
                        backgroundColor: "red",
                        width: "100%",
                        height: "100%",
                      }}
                    ></div>
                  )}
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
