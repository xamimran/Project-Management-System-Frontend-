import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
// Importing CSS
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link to="/home" className={styles.a}>
            <span className={styles.span}>PMS</span>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
