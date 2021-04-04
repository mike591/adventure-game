import React from "react";

const usePlayer = () => {
  const [player, setPlayer] = React.useState({
    x: 0,
    y: 0,
  });

  const updatePlayer = (changes = {}) => {
    setPlayer((last) => ({ ...last, ...changes }));
  };

  return {
    player,
    updatePlayer,
  };
};

export default usePlayer;
