import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import Home from 'pages/index';
import React from 'react';
import Loader from 'components/Loader';
import Nav from 'components/Nav';

const protectedRoutes = ['/Game'];
const publicRoutes = ['/Test'];

const AuthWrappedComponents = ({ Component, pageProps }) => {
  const router = useRouter();
  const { user, isLoadingAuth } = useAuth();

  const signedIn = user;
  const accessingProtectedRoutes = protectedRoutes.includes(router.pathname);
  const accessingPublicRoutes = publicRoutes.includes(router.pathname);
  let ComponentToRender = Component;

  // TODO: double check this logic for public routes and not logged in.
  if (!signedIn && accessingProtectedRoutes) {
    console.log(1);
    ComponentToRender = Home;
  }

  if (signedIn && !accessingProtectedRoutes && !accessingPublicRoutes) {
    console.log(2);
    router.push('/Game');
  }

  return (
    <>
      <Loader isLoading={isLoadingAuth} />
      <Nav />
      <ComponentToRender {...pageProps} />
    </>
  );
};

export default AuthWrappedComponents;
