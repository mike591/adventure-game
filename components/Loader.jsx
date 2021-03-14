import React from "react";
import styles from "styles/Loader.module.scss";

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.Loader}>
        <div className={styles.Loader__animation}></div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Loader;
