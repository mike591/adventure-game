import React from "react";
import firebase from "firebase/app";
import "normalize.css";
import { AuthProvider, useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import Home from "pages/index";
import Loader from "components/Loader";

const protectedRoutes = ["/Game"];

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

const AuthWrappedComponents = ({ Component, pageProps }) => {
  const router = useRouter();
  const { user, isLoadingAuth } = useAuth();

  const notLoggedIn = !user;
  const accessingProtectedRoutes = protectedRoutes.includes(router.pathname);
  let ComponentToRender = Component;

  if (notLoggedIn && accessingProtectedRoutes) {
    ComponentToRender = Home;
  }

  return (
    <>
      <Loader isLoading={isLoadingAuth} />
      <ComponentToRender {...pageProps} />
    </>
  );
};

const MyApp = (props) => {
  return (
    <AuthProvider>
      <AuthWrappedComponents {...props} />
    </AuthProvider>
  );
};

export default MyApp;
