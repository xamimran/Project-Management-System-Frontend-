import React from "react";
// Importing CSS
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.root}>
      <a href="/home" className={styles.a}>
        <span className={styles.span}>Project Management System</span>
      </a>
      <hr />
    </div>
  );
};
