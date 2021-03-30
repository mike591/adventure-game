import React from "react";
import styles from "styles/Maze.module.scss";

const generateStyles = (cell) => {
  const styles = {
    borderRightColor: !cell.right && "black",
    borderLeftColor: !cell.left && "black",
    borderBottomColor: !cell.bottom && "black",
    borderTopColor: !cell.top && "black",
  };
  return styles;
};

const Maze = ({ maze }) => {
  return (
    <div className={styles.Maze}>
      {maze?.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className={styles.row}>
            {row.map((cell, cellIdx) => {
              return (
                <div
                  key={cellIdx}
                  className={styles.cell}
                  style={generateStyles(cell)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Maze;
