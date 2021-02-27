import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "components/App";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDA2gTkBQzekuYqiTmSHBMYvo5RvZNiv4A",
  authDomain: "adventuregame-4ef24.firebaseapp.com",
  projectId: "adventuregame-4ef24",
  storageBucket: "adventuregame-4ef24.appspot.com",
  messagingSenderId: "786430803048",
  appId: "1:786430803048:web:fffc45e9f91414627e0fdd",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
