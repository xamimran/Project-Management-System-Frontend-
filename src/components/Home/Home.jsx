import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import React, { useState } from "react";
import { Header } from "../Header/Header";
// importing CSS
import styles from "./Home.module.css";

export const Home = () => {
  const [cardRaised1, setCardRaised1] = useState(false);
  const [cardRaised2, setCardRaised2] = useState(false);
  const [cardRaised3, setCardRaised3] = useState(false);

  return (
    <div className={styles.root}>
      <Header />

      <h1>Welcome to Projet Management System</h1>
      <p>
        We design, develop and launch websites and products for startups,
        companies and ourselves.
      </p>
      <Button size="large" className={styles.button}>
        CONTACT US
      </Button>

      <h2 className="my-4">Select Card</h2>

      <div className="d-flex justify-content-center">
        {/* First Card */}
        <Card
          className={`col-3 px-0 mr-5 ${styles.card}`}
          raised={cardRaised1}
          onPointerEnter={() => setCardRaised1(true)}
          onPointerLeave={() => setCardRaised1(false)}
        >
          <CardActionArea className="pt-5 pb-4">
            <CardMedia component="div">
              <AssignmentTurnedInOutlinedIcon className={styles.tasks} />
            </CardMedia>
            <CardContent>
              <h5 className={styles.task_h5}>Your Tasks</h5>
              <p className={styles.task_p}>
                You can check your tasks from here. Which are assigned to you by
                your Team Leader. Complete your tasks as soon as possible
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Second Card */}
        <Card
          className={`col-3 px-0 mr-5 ${styles.card}`}
          raised={cardRaised2}
          onPointerEnter={() => setCardRaised2(true)}
          onPointerLeave={() => setCardRaised2(false)}
        >
          <CardActionArea className="pt-5 pb-4">
            <CardMedia component="div">
              <AssignmentTurnedInOutlinedIcon className={styles.tasks} />
            </CardMedia>
            <CardContent>
              <h5 className={styles.task_h5}>Your Tasks</h5>
              <p className={styles.task_p}>
                You can check your tasks from here. Which are assigned to you by
                your Team Leader. Complete your tasks as soon as possible
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Third Card */}
        <Card
          className={`col-3 px-0 mr-5 ${styles.card}`}
          raised={cardRaised3}
          onPointerEnter={() => setCardRaised3(true)}
          onPointerLeave={() => setCardRaised3(false)}
        >
          <CardActionArea className="pt-5 pb-4">
            <CardMedia component="div">
              <AssignmentTurnedInOutlinedIcon className={styles.tasks} />
            </CardMedia>
            <CardContent>
              <h5 className={styles.task_h5}>Your Tasks</h5>
              <p className={styles.task_p}>
                You can check your tasks from here. Which are assigned to you by
                your Team Leader. Complete your tasks as soon as possible
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};
