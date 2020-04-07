import React from "react";
import { useMorePostsFromUserStyles } from "../../styles/components/post/morePostsFromUser";
//TODO change for DB
//import { useSubscription } from "@apollo/react-hooks";
//import { GET_SONGS } from "../../graphql/subscriptions";
import { Typography } from "@material-ui/core";
import { LoadingLargeIcon } from "../../styles/icons";
import { getDefaultSong, defaultUser } from "../../dev-data/data";
import GridPost from "../shared/GridPost";
import { Link } from "react-router-dom";

function MorePostsFromUser() {
  const classes = useMorePostsFromUserStyles();

  //TODO change for DB
  //const { data, loading, error } = useSubscription(GET_SONGS);
  //if (error) return <div>Error fetching songs</div>;

  const loading = false;
  return (
    <div className={classes.container}>
      <Typography
        variant="subtitle2"
        component="h2"
        color="textSecondary"
        gutterBottom
        className={classes.typography}
      >
        More Posts From{" "}
        <Link to={`/${defaultUser.username}`} className={classes.link}>
          @{`${defaultUser.username}`}
        </Link>
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {/* TODO Change for DB
            {data.songs.map((song, index) => ( */}
            {Array.from({ length: 6 }, () => getDefaultSong()).map((song) => (
              <GridPost key={song.id} song={song} />
            ))}
          </div>
        </article>
      )}
    </div>
  );
}

export default MorePostsFromUser;
