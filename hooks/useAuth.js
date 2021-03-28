import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = React.createContext();

const useAuthProvider = () => {
  const [user, setUser] = React.useState();
  const [isLoadingAuth, setIsLoadingAuth] = React.useState(false);
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

export const AuthProvider = ({ children }) => {
  const authProvider = useAuthProvider();

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
