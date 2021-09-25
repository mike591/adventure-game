import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useGame = () => {
  const db = firebase.firestore();
  const gameRef = db.collection('game');

  const unsubscribeGameRef = useRef(null);

  useEffect(() => {
    return () => {
      unsubscribeGameRef.current && unsubscribeGameRef.current();
    };
  });

  const createGame = ({ name, maze, user }) => {
    return gameRef.doc(uuidv4()).set({
      name,
      maze,
      [user.id]: user,
    });
  };

  const subscribeToGame = () => {};

  const updateGame = () => {};

  return {
    subscribeToGame,
    updateGame,
    createGame,
  };
};
