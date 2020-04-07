import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Slider,
} from "@material-ui/core";
import ReactPlayer from "react-player";
import { usePostSongPlayerStyles } from "../../styles/components/post/postSongPlayer";
import { defaultSong } from "../../dev-data/data";
import { PlayIcon, PauseIcon, AddToQueIcon } from "../../styles/icons";

import { useMutation } from "@apollo/react-hooks";
import { ADD_OR_REMOVE_FROM_QUEUED_SONGS } from "../../graphql/mutations";

function PostSongPlayer({ song = defaultSong }) {
  const classes = usePostSongPlayerStyles();
  const { url, title, artist } = song;
  const [isSongPlaying, setSongPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [played, setPlayed] = useState(0);
  const reactPlayerRef = useRef();

  const handlePlaySong = () => {
    setSongPlaying(!isSongPlaying);
  };

  //TODO check for existing queud song and change Icon to -
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

  const handleOrRemoveFromQueuedSongs = () => {
    console.log("queued");
    addOrRemoveFromQueuedSongs({
      variables: { input: { ...song }, __typename: "Song" },
    });
  };

  const handleSliderProgressChange = (e, newValue) => {
    setPlayed(newValue);
  };

  const handleSeekingMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekingMouseUp = () => {
    setSeeking(false);
    setPlayedSeconds(playedSeconds);
    reactPlayerRef.current.seekTo(played);
  };

  const formatDuration = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  return (
    <>
      <Card className={classes.container} variant="outlined">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.songWrapper}>
              <Typography variant="subtitle2" className={classes.typography}>
                {title}
              </Typography>
              <Typography variant="body2" className={classes.typography}>
                {artist}
              </Typography>
            </div>
          </CardContent>
          <div className={classes.controls}>
            <IconButton onClick={handlePlaySong}>
              {isSongPlaying ? (
                <PauseIcon className={classes.playButton} />
              ) : (
                <PlayIcon className={classes.playButton} />
              )}
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              {formatDuration(playedSeconds)}
            </Typography>
            <IconButton
              size="small"
              color="primary"
              onClick={handleOrRemoveFromQueuedSongs}
            >
              <AddToQueIcon className={classes.queButton} />
            </IconButton>
          </div>
          <Slider
            onMouseDown={handleSeekingMouseDown}
            onMouseUp={handleSeekingMouseUp}
            onChange={handleSliderProgressChange}
            value={played}
            type="range"
            min={0}
            max={1}
            step={0.01}
          />
        </div>
        <ReactPlayer
          ref={reactPlayerRef}
          onProgress={({ played, playedSeconds }) => {
            if (!seeking) {
              setPlayed(played);
              setPlayedSeconds(playedSeconds);
            }
          }}
          hidden
          url={url}
          playing={isSongPlaying}
        />
      </Card>
    </>
  );
}

export default PostSongPlayer;
