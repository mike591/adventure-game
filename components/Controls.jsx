import React from "react";
import styles from "styles/Controls.module.scss";
import Up from "assets/arrow-up.svg";
import Left from "assets/arrow-left.svg";
import Down from "assets/arrow-down.svg";
import Right from "assets/arrow-right.svg";

const Controls = ({ handleUp, handleLeft, handlerRight, handleDown }) => {
  const handleKeydown = React.useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowUp":
          handleUp();
          break;
        case "ArrowDown":
          handleDown();
          break;
        case "ArrowLeft":
          handleLeft();
          break;
        case "ArrowRight":
          handlerRight();
          break;
        default:
          break;
      }
    },
    [handleDown, handleLeft, handleUp, handlerRight]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <div className={styles.Controls}>
      <button onClick={handleUp}>
        <Up />
      </button>
      <div>
        <button onClick={handleLeft}>
          <Left />
        </button>
        <button onClick={handleDown}>
          <Down />
        </button>
        <button onClick={handlerRight}>
          <Right />
        </button>
      </div>
    </div>
  );
};

export default Controls;
