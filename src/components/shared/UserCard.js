import React from "react";
import { useUserCardStyles } from "../../styles/components/shared/userCard";
import { Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { defaultUser } from "../../dev-data/data";

const UserCard = ({ user = defaultUser, avatarSize = 44 }) => {
  const classes = useUserCardStyles({ avatarSize });
  const { username, profile_image, name } = user;
  return (
    <div className={classes.wrapper}>
      <Link to={`/${username}`}>
        <Avatar src={profile_image} alt={username} className={classes.avatar} />
      </Link>
      <div className={classes.nameWrapper}>
        <Link to={`/${username}`}>
          <Typography variant="subtitle2" className={classes.typography}>
            {username}
          </Typography>
        </Link>
        <Typography variant="body2" className={classes.typography}>
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default UserCard;
