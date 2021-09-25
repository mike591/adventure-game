import classNames from 'classnames';
import React from 'react';
import buttonStyles from 'styles/Button.module.scss';
import createGameModalContentStyles from 'styles/CreateGameModalContent.module.scss';
import textStyles from 'styles/Text.module.scss';

const MIN = 10;
const MAX = 100;
const CreateGameModalContent = () => {
  const [mazeSize, setMazeSize] = React.useState(MIN);
  const [limitError, setLimitError] = React.useState(false);

  React.useEffect(() => {
    if (mazeSize < MIN || mazeSize > MAX) {
      setLimitError(true);
    } else {
      setLimitError(false);
    }
  }, [mazeSize]);
  return (
    <div className={createGameModalContentStyles.CreateGameModalContent}>
      <div className={textStyles.subTitle}>Initial Setup</div>
      <div className={createGameModalContentStyles.inputWrapper}>
        <div className={textStyles.label}>Maze size:</div>
        <input
          type="number"
          step="1"
          min={MIN}
          max={MAX}
          onChange={(e) => setMazeSize(e.currentTarget.value)}
          value={mazeSize}
          className={createGameModalContentStyles.input}
        ></input>
      </div>
      <br />
      {limitError && (
        <div className={createGameModalContentStyles.error}>
          The size must be between {MIN} and {MAX} inclusive.
        </div>
      )}
      <br />
      <br />
      <button
        className={classNames(
          buttonStyles.button,
          createGameModalContentStyles.button,
        )}
        disabled={limitError}
      >
        Create Game
      </button>
    </div>
  );
};

export default CreateGameModalContent;
