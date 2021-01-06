import React from "react";
import { Link } from 'react-router-dom';
// Importing CSS
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Link to="/home" className={styles.a}>
        <span className={styles.span}>Project Management System</span>
      </Link>
      <hr />
    </div>
  );
};
