import classnames from 'classnames';
import useGame from 'hooks/useGame';
import React from 'react';
import buttonStyles from 'styles/Button.module.scss';
import inputStyles from 'styles/Input.module.scss';
import pageStyles from 'styles/Page.module.scss';
import setupStyles from 'styles/Setup.module.scss';

const Setup = () => {
  const [roomKey, setRoomKey] = React.useState('');

  const handleCreateRoom = () => {
    console.log('hi');
  };

  return (
    <div className={classnames(setupStyles.Setup, pageStyles.Page)}>
      <br />
      <div className={setupStyles.row}>
        <div>Create a new room</div>
        <button className={buttonStyles.button} onClick={handleCreateRoom}>
          Create
        </button>
      </div>
      <br />
      <br />
      <div>or</div>
      <br />
      <br />
      <div className={setupStyles.row}>
        <div>Enter a room key:</div>
        <input
          className={inputStyles.input}
          type="text"
          onChange={(e) => setRoomKey(e.currentTarget.value)}
          value={roomKey}
          placeholder="..."
        />
      </div>
      <br />
      <button className={buttonStyles.button} disabled={!roomKey}>
        Enter
      </button>
    </div>
  );
};

export default Setup;