import { Button } from "@material-ui/core";
import React from "react";
import { HomeCards } from "./Home Cards/HomeCards";
// importing CSS
import styles from "./Home.module.css";
import { HomeHeader } from "./HomeHeader/HomeHeader";

export const Home = () => {
  return (
    <div className={styles.root}  >
      {/* Adding Header */}
      <HomeHeader />

      <h1 className="mt-5">Welcome to Projet Management System</h1>
      <p>
        We design, develop and launch websites and products for startups,
        companies and ourselves.
      </p>
      <Button size="large" className={styles.button}>
        CONTACT US
      </Button>

      <h2 className="my-4">Here We Go!</h2>

      {/* Home Cards */}
      <div className="justify-content-center container">
      <HomeCards />
      </div>

    </div>
  );
};
