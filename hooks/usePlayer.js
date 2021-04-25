import React from 'react';
import {
  FaChevronCircleDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronCircleUp,
} from 'react-icons/fa';
import { atom, useRecoilState } from 'recoil';

export const TOP = 'TOP';
export const BOTTOM = 'BOTTOM';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';

const playerState = atom({
  key: 'playerState',
  default: {
    x: 0,
    y: 0,
    direction: BOTTOM,
  },
});

export const iconMap = {
  TOP: FaChevronCircleUp,
  BOTTOM: FaChevronCircleDown,
  LEFT: FaChevronCircleLeft,
  RIGHT: FaChevronCircleRight,
};

export const getIcon = (player) => {
  return iconMap[player?.direction] || iconMap[BOTTOM];
};

export const usePlayer = () => {
  const [player, setPlayer] = useRecoilState(playerState);

  const updatePlayer = (changes = {}) => {
    setPlayer((last) => ({ ...last, ...changes }));
  };

  return {
    player,
    updatePlayer,
  };
};
