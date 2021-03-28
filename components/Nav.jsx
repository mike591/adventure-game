import React from "react";
import styles from "styles/Nav.module.scss";
import { useAuth } from "hooks/useAuth";

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <h1 className={styles.title}>AdventureGame</h1>
      <div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Nav;
