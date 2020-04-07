import React from "react";
import { useFeedSideSuggestionsStyles } from "../../styles/components/feed/feedSideSuggestions";
import { Paper, Typography } from "@material-ui/core";
import { getDefaultUser } from "../../dev-data/data";
import UserCard from "../shared/UserCard";
import FollowButton from "../shared/FollowButton";
import { LoadingIcon } from "../../styles/icons";

function FeedSideSuggestions() {
  const classes = useFeedSideSuggestionsStyles();
  let loading = false;
  return (
    <article className={classes.article}>
      <Paper className={classes.paper}>
        <Typography
          variant="subtitle2"
          component="h2"
          color="secondary"
          align="left"
          gutterBottom
          className={classes.typography}
        >
          Suggestions for you
        </Typography>
        {loading ? (
          <LoadingIcon />
        ) : (
          Array.from({ length: 5 }, () => getDefaultUser()).map((user) => (
            <div key={user.id} className={classes.card}>
              <UserCard user={user} avatarSize={30} />
              <FollowButton side />
            </div>
          ))
        )}
      </Paper>
    </article>
  );
}

export default FeedSideSuggestions;
