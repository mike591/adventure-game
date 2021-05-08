import Down from 'assets/arrow-down.svg';
import Left from 'assets/arrow-left.svg';
import Right from 'assets/arrow-right.svg';
import Up from 'assets/arrow-up.svg';
import React from 'react';
import styles from 'styles/Controls.module.scss';

const Controls = ({
  handleUp,
  handleLeft,
  handleRight,
  handleDown,
  disabled,
}) => {
  const handleKeydown = React.useCallback(
    (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          handleUp();
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleDown();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handleLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleRight();
          break;
        default:
          break;
      }
    },
    [handleDown, handleLeft, handleUp, handleRight],
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <div className={styles.Controls}>
      <button onClick={handleUp} disabled={disabled}>
        <Up />
      </button>
      <div>
        <button onClick={handleLeft} disabled={disabled}>
          <Left />
        </button>
        <button onClick={handleDown} disabled={disabled}>
          <Down />
        </button>
        <button onClick={handleRight} disabled={disabled}>
          <Right />
        </button>
      </div>
    </div>
  );
};

export default Controls;
