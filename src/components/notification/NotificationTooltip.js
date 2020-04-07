import React from "react";
import { useNavbarStyles } from "../../styles/components/shared/navbar";
import { Typography } from "@material-ui/core";

function NotificationTooltip() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.tooltipContainer}>
      <div className={classes.tooltip}>
        <span arial-label="Followers" className={classes.followers}></span>
        <Typography>1</Typography>
      </div>
      <div className={classes.tooltip}>
        <span arial-label="Likes" className={classes.likes}></span>
        <Typography>1</Typography>
      </div>
    </div>
  );
}

export default NotificationTooltip;
