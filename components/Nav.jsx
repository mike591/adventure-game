import React from "react";
import styles from "styles/Nav.module.scss";
import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";

const Nav = () => {
  const { user, logout } = useAuth();

  const router = useRouter();

  const goTo = (route) => {
    return () => router.push(route);
  };

  return (
    <div className={styles.Nav}>
      <h1 className={styles.title} onClick={goTo("/")}>
        AdventureGame
      </h1>
      <div>
        <button onClick={goTo("/Test")}>Test</button>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
};

export default Nav;
