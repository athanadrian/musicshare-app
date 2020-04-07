import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Avatar } from "@material-ui/core";
import { useFollowSuggestionsStyles } from "../../styles/components/shared/followSuggestions";
import { LoadingLargeIcon } from "../../styles/icons";
import { getDefaultUser } from "../../dev-data/data";
import FollowButton from "./FollowButton";

function FollowSuggestions({ hideHeader }) {
  const classes = useFollowSuggestionsStyles();

  const loading = false;
  return (
    <div className={classes.container}>
      {!hideHeader && (
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className={classes.typography}
        >
          Suggestions For You
        </Typography>
      )}
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <Slider
          className={classes.slide}
          infinite
          dots={false}
          speed={1000}
          touchThreshold={1000}
          variableWidth
          slidesToScroll={3}
          arrows
          swipeToSlide
          easing="ease-in-out"
        >
          {Array.from({ length: 10 }, () => getDefaultUser()).map((user) => (
            <FollowSuggestionsItem key={user.id} user={user} />
          ))}
        </Slider>
      )}
    </div>
  );
}

function FollowSuggestionsItem({ user }) {
  const classes = useFollowSuggestionsStyles();
  const { profile_image, username, name } = user;

  return (
    <div>
      <div className={classes.card}>
        <Link to={`/${username}`}>
          <Avatar
            src={profile_image}
            alt={`${username}'s profile`}
            classes={{
              root: classes.avatar,
              img: classes.avatarImg,
            }}
          />
        </Link>
        <Link to={`/${username}`}>
          <Typography
            variant="subtitle2"
            className={classes.text}
            align="center"
          >
            {username}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.text}
          align="center"
        >
          {name}
        </Typography>
        <FollowButton side={false} />
      </div>
    </div>
  );
}

export default FollowSuggestions;
