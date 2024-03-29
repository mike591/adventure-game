import classnames from 'classnames';
import React from 'react';
import Modal from 'react-modal';
import buttonStyles from 'styles/Button.module.scss';
import inputStyles from 'styles/Input.module.scss';
import pageStyles from 'styles/Page.module.scss';
import setupStyles from 'styles/Setup.module.scss';
import CreatGameModalContent from 'components/CreateGameModalContent';

const Setup = () => {
  const [roomKey, setRoomKey] = React.useState('');
  const [isCreatingGame, setIsCreatingGame] = React.useState(false);

  return (
    <div className={classnames(setupStyles.Setup, pageStyles.Page)}>
      {isCreatingGame && (
        <Modal
          isOpen={isCreatingGame}
          onRequestClose={() => setIsCreatingGame(false)}
          ariaHideApp={false}
          className={setupStyles.modalContent}
        >
          <CreatGameModalContent />
        </Modal>
      )}
      <br />
      <div className={setupStyles.row}>
        <div>Create a new room</div>
        <button
          className={buttonStyles.button}
          onClick={() => setIsCreatingGame(true)}
        >
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
