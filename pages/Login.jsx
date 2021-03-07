import React from "react";
import style from "../styles/Login.module.scss";
import firebase from "firebase/app";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";

const Login = () => {
  const loginRef = React.createRef();

  React.useEffect(() => {
    const init = async () => {
      const firebaseui = await import("firebaseui");
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start(loginRef.current, {
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
          ],
          signInSuccessUrl: "/Test",
        });
      }
    };

    init();
  }, [loginRef]);

  return <div className={style.Login} ref={loginRef}></div>;
};

export default Login;
