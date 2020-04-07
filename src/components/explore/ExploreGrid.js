import React from "react";
//TODO Change for DB
//import { useSubscription } from "@apollo/react-hooks";
//import { GET_SONGS } from "../../graphql/subscriptions";
import { useExploreGridStyles } from "../../styles/components/explore/exploreGrid";
import { Typography } from "@material-ui/core";
import { LoadingLargeIcon } from "../../styles/icons";
import { getDefaultSong } from "../../dev-data/data";
import GridPost from "../shared/GridPost";

function ExploreGrid() {
  const classes = useExploreGridStyles();

  //TODO Change for DB
  //const { data, loading, error } = useSubscription(GET_SONGS);
  //if (error) return <div>Error fetching songs</div>;

  const loading = false;
  return (
    <>
      <Typography
        variant="subtitle2"
        component="h2"
        color="textSecondary"
        gutterBottom
        className={classes.typography}
      >
        Explore
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {/* TODO Change for DB
            {data.songs.map((song, index) => ( */}
            {Array.from({ length: 10 }, () => getDefaultSong()).map((song) => (
              <GridPost key={song.id} song={song} />
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default ExploreGrid;
