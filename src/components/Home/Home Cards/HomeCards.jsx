import React from "react";
import { HomeCard } from "../HomeCard/HomeCard";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";

// importing css
import styles from "./HomeCards.module.css";

export const HomeCards = () => {
  return (
    <div className="d-flex justify-content-center">
      <HomeCard
        title="Your Tasks 2"
        desc="You can check your tasks from here. Which are assigned to you by
                your Team Leader. Complete your tasks as soon as possible"
      >
        <AssignmentTurnedInOutlinedIcon className={styles.icon} />
      </HomeCard>

      <HomeCard
        title="Your Tasks 2"
        desc="You can check your tasks from here. Which are assigned to you by
                your Team Leader. Complete your tasks as soon as possible"
      >
        <AssignmentTurnedInOutlinedIcon className={styles.icon} />
      </HomeCard>
      <HomeCard
        title="Your Tasks 2"
        desc="You can check your tasks from here. Which are assigned to you by
                your Team Leader. Complete your tasks as soon as possible"
      >
        <AssignmentTurnedInOutlinedIcon className={styles.icon} />
      </HomeCard>
    </div>
  );
};
