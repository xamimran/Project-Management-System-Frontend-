import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons";
import { Header } from "../../Header/Header";
// importing css
import styles from "./HomeHeader.module.css";

export const HomeHeader = () => {
  return (
    <Header>
      <div style={{ flexGrow: "1" }} />
      <div className={styles.icons}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon className={styles.icon} />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={12} color="secondary">
            <NotificationsIcon className={styles.icon} />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle className={styles.icon} />
        </IconButton>
      </div>
    </Header>
  );
};
