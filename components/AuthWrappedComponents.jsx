import React from "react";
import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import Home from "pages/index";
import Loader from "components/Loader";

const protectedRoutes = ["/Game"];

const AuthWrappedComponents = ({ Component, pageProps }) => {
  const router = useRouter();
  const { user, isLoadingAuth } = useAuth();

  const signedIn = user;
  const accessingProtectedRoutes = protectedRoutes.includes(router.pathname);
  let ComponentToRender = Component;

  if (!signedIn && accessingProtectedRoutes) {
    ComponentToRender = Home;
  }

  if (signedIn && !accessingProtectedRoutes) {
    router.push("/Game");
  }

  return (
    <>
      <Loader isLoading={isLoadingAuth} />
      <ComponentToRender {...pageProps} />
    </>
  );
};

export default AuthWrappedComponents;
