import React from "react";
import { useHistory } from "react-router-dom";
import { useGridPostStyles } from "../../styles/components/shared/gridPost";
import { Typography } from "@material-ui/core";

function GridPost({ song }) {
  const classes = useGridPostStyles();
  const history = useHistory();

  function handleOpenPostModal() {
    history.push({
      pathname: `/p/${song.id}`,
      state: { modal: true },
    });
  }

  return (
    <div onClick={handleOpenPostModal} className={classes.gridPostContainer}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>{song.likes}</Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>{song.comments ? song.comments.length : 0}</Typography>
        </div>
      </div>
      <img src={song.thumbnail} alt="Song Cover" className={classes.image} />
    </div>
  );
}

export default GridPost;
