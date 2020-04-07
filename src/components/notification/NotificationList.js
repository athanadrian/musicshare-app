import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNotificationListStyles } from "../../styles/components/notification/notificationList";
import { defaultNotifications } from "../../dev-data/data";
import { Grid, Avatar, Typography } from "@material-ui/core";
import FollowButton from "../shared/FollowButton";
import useOutSideClick from "@rooks/use-outside-click";

function NotificationList({ handleHideList }) {
  const listContainerRef = useRef();
  const classes = useNotificationListStyles();
  useOutSideClick(listContainerRef, handleHideList);

  return (
    <Grid ref={listContainerRef} className={classes.listContainer} container>
      {defaultNotifications.map(notification => {
        const isLike = notification.type === "like";
        const isFollow = notification.type === "follow";

        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="user avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && `likes your song 4d`}
                  {isFollow && `started follow you 2wk`}
                </Typography>
              </div>
            </div>
            <div>
              {isLike && (
                <Link to={`/p/${notification.post.id}`}>
                  <Avatar
                    src={notification.post.thumbnail}
                    alt="post thumbnail"
                  />
                </Link>
              )}
              {isFollow && <FollowButton />}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
