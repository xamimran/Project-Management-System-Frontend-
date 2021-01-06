import React from "react";
import { Link } from "react-router-dom";
// Importing CSS
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div>
        {" "}
        <Link to="/home" className={styles.a}>
          <span className={styles.span}>PMS</span>
        </Link>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};
