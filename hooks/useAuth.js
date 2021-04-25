import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import { atom, useRecoilState } from 'recoil';

const authState = atom({
  key: 'authState',
  default: undefined,
});

export const useAuth = () => {
  const [user, setUser] = React.useState();
  const [isLoadingAuth, setIsLoadingAuth] = useRecoilState(authState);
  const refContainer = React.useRef();

  const handleSetLoading = (isLoading) => {
    if (!isLoading) {
      window.clearTimeout(refContainer.current);
      refContainer.current = window.setTimeout(() => {
        setIsLoadingAuth(isLoading);
      }, 1000);
    } else {
      setIsLoadingAuth(isLoading);
    }
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    handleSetLoading(true);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      handleSetLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, isLoadingAuth, logout, setUser };
};
