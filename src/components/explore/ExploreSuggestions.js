import React from "react";
import { useExploreSuggestionsStyles } from "../../styles/components/explore/exploreSuggestions";
import { Hidden, Typography } from "@material-ui/core";
import FollowSuggestions from "../shared/FollowSuggestions";

function ExploreSuggestions() {
  const classes = useExploreSuggestionsStyles();

  return (
    <Hidden xsDown>
      <div className={classes.container}>
        <Typography
          variant="subtitle2"
          component="h2"
          color="textSecondary"
          className={classes.typography}
        >
          Discover People
        </Typography>
        <FollowSuggestions hideHeader={true} />
      </div>
    </Hidden>
  );
}

export default ExploreSuggestions;
