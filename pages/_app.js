import React from "react";
import firebase from "firebase/app";
import "normalize.css";
import "styles/main.scss";
import { AuthProvider } from "hooks/useAuth";
import AuthWrappedComponents from "components/AuthWrappedComponents";

const firebaseConfig = {
  apiKey: "AIzaSyDA2gTkBQzekuYqiTmSHBMYvo5RvZNiv4A",
  authDomain: "adventuregame-4ef24.firebaseapp.com",
  projectId: "adventuregame-4ef24",
  storageBucket: "adventuregame-4ef24.appspot.com",
  messagingSenderId: "786430803048",
  appId: "1:786430803048:web:fffc45e9f91414627e0fdd",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const MyApp = (props) => {
  return (
    <AuthProvider>
      <AuthWrappedComponents {...props} />
    </AuthProvider>
  );
};

export default MyApp;
