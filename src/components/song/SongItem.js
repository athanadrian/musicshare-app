import React, { useContext, useState, useEffect } from "react";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import {
  PlayIcon,
  PauseIcon,
  AddToQueIcon,
  DeleteFromDBIcon,
  //AddToQueDBIcon,
  //AddToQueListIcon
} from "../../styles/icons";
import { useMutation } from "@apollo/react-hooks";
import { SongContext } from "../../pages/feed";
import {
  ADD_OR_REMOVE_FROM_QUEUED_SONGS,
  DELETE_SONG,
} from "../../graphql/mutations";
import { useSongItemStyles } from "../../styles/components/song/songItem";

function SongItem({ song }) {
  const classes = useSongItemStyles();
  const { id, title, artist } = song;
  const [isCurrentSongPlaying, setIsCurrentSongPlaying] = useState(false);
  const { state, dispatch } = useContext(SongContext);

  const [addOrRemoveFromQueuedSongs] = useMutation(
    ADD_OR_REMOVE_FROM_QUEUED_SONGS,
    {
      onCompleted: (data) => {
        localStorage.setItem(
          "queuedSongs",
          JSON.stringify(data.addOrRemoveFromQueuedSongs)
        );
      },
    }
  );
  const [deleteSongFromList] = useMutation(DELETE_SONG, {
    onCompleted: (data) => {
      localStorage.setItem(
        "deletedSongs",
        JSON.stringify(data.deleteSongFromList)
      );
    },
  });
  useEffect(() => {
    const isSongPLaying = state.isPlaying && id === state.song.id;
    setIsCurrentSongPlaying(isSongPLaying);
  }, [id, state.song.id, state.isPlaying]);

  const handlePlaySong = () => {
    dispatch({ type: "SET_SONG", payload: { song } });
    dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" });
  };

  const handleOrRemoveFromQueuedSongs = () => {
    console.log("queued");
    addOrRemoveFromQueuedSongs({
      variables: { input: { ...song }, __typename: "Song" },
    });
  };

  const handleDeleteSongFromList = async ({ id }) => {
    const isConfirmed = window.confirm("You want to delete it?");
    if (isConfirmed) {
      const data = await deleteSongFromList({
        variables: { id },
      });
      localStorage.setItem("deletedSongs", JSON.stringify(data));
      console.log("delete song ", data);
    }
  };

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary" onClick={handlePlaySong}>
              {isCurrentSongPlaying ? <PauseIcon /> : <PlayIcon />}
            </IconButton>
            <IconButton
              size="small"
              color="primary"
              onClick={handleOrRemoveFromQueuedSongs}
            >
              <AddToQueIcon />
            </IconButton>
            <IconButton
              size="small"
              color="secondary"
              onClick={() => handleDeleteSongFromList(song)}
            >
              <DeleteFromDBIcon color="error" />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SongItem;
