import React from "react";

import { HomeCard } from "../HomeCard/HomeCard";

// importing icons from material UI
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ChatIcon from '@material-ui/icons/Chat';
import EditIcon from '@material-ui/icons/Edit';
import { Fade } from '@material-ui/core'
// importing css
import styles from "./HomeCards.module.css";

export const HomeCards = () => {
  return (
    <div className="d-flex row justify-content-center">
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <HomeCard
          title="Tasks"
          desc="Here you can find all the tasks here which belongs to you and try to solve them "
          disable={true}
        >
          <AssignmentIcon className={styles.icon} />
        </HomeCard>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <HomeCard
          title="Learning Material"
          desc="Here you can find all the learnig material related to your tasks"
        >
          < MenuBookIcon className={styles.icon} />
        </HomeCard>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <HomeCard
          title="Account Details"
          desc="Click here to see all your account details or you can change your account settings"
        >
          <AccountBoxIcon className={styles.icon} />
        </HomeCard>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <HomeCard
          title="Project Details"
          desc="You can create a new project, change project statistics or simply view them"
        >
          <AssessmentIcon className={styles.icon} />
        </HomeCard>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <HomeCard
          title="Discussion"
          desc="You can share your code details or thoughts with others members"
        >
          <ChatIcon  className={styles.icon} />
        </HomeCard>

        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <HomeCard
          title="Feedback/Reports"
          desc="You can share your feedback realated to any code or report any of the user"
        >
          <EditIcon className={styles.icon} />
        </HomeCard>
        </div>

    </div>
  );
};
