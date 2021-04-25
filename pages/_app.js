import firebase from 'firebase/app';
import { AuthProvider } from 'hooks/useAuth';
import 'normalize.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import 'styles/main.scss';
import AuthWrappedComponents from 'components/AuthWrappedComponents';

const firebaseConfig = {
  apiKey: 'AIzaSyDA2gTkBQzekuYqiTmSHBMYvo5RvZNiv4A',
  authDomain: 'adventuregame-4ef24.firebaseapp.com',
  projectId: 'adventuregame-4ef24',
  storageBucket: 'adventuregame-4ef24.appspot.com',
  messagingSenderId: '786430803048',
  appId: '1:786430803048:web:fffc45e9f91414627e0fdd',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const MyApp = (props) => {
  return (
    <RecoilRoot>
      <AuthWrappedComponents {...props} />
    </RecoilRoot>
  );
};

export default MyApp;
