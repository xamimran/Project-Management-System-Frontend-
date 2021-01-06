import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
// importing styles
import styles from "./HomeCard.module.css";

export const HomeCard = (props) => {
  const [raised, setRaised] = useState(false);

  return (
    <Card
      className={`${styles.root} ${props.disable == null ? null: styles.disable}`}
      raised={raised}
      onPointerEnter={() => setRaised(true)}
      onPointerLeave={() => setRaised(false)}
    >
      <CardActionArea className="pt-5 pb-4">
        <CardMedia component="div">{props.children}</CardMedia>
        <CardContent>
          <h5 className={styles.title}>{props.title}</h5>
          <p className={styles.desc}>{props.desc}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
