import React, { useState, useEffect, useContext, useRef } from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  Card,
  Typography,
  IconButton,
  Slider,
  Divider,
} from "@material-ui/core";
import { PlayArrow, SkipPrevious, SkipNext, Pause } from "@material-ui/icons";
import ReactPlayer from "react-player";
import { useSongPlayerStyles } from "../../styles/components/song/songPlayer";
import { SongContext } from "../../pages/feed";
import { GET_QUEUED_SONGS } from "../../graphql/queries";
import QueuedSongList from "./QueuedSongList";

const SongPlayer = () => {
  const classes = useSongPlayerStyles();
  const { data } = useQuery(GET_QUEUED_SONGS);
  const { state, dispatch } = useContext(SongContext);
  const [positionInQueuedSongs, setPositionInQueuedSongs] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [played, setPlayed] = useState(0);
  const reactPlayerRef = useRef();

  useEffect(() => {
    const songIndex = data.queuedSongs.findIndex(
      (song) => song.id === state.song.id
    );
    setPositionInQueuedSongs(songIndex);
  }, [data.queuedSongs, state.song.id]);

  useEffect(() => {
    const nextSong = data.queuedSongs[positionInQueuedSongs + 1];
    if (played >= 0.99 && nextSong) {
      setPlayed(0);
      dispatch({ type: "SET_SONG", payload: { song: nextSong } });
    }
  }, [data.queuedSongs, played, dispatch, positionInQueuedSongs]);

  const handlePlaySong = () => {
    dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" });
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

  const handlePlayPreviousSong = () => {
    const previousSong = data.queuedSongs[positionInQueuedSongs - 1];
    if (previousSong) {
      dispatch({ type: "SET_SONG", payload: { song: previousSong } });
    }
  };

  const handlePlayNextSong = () => {
    const nextSong = data.queuedSongs[positionInQueuedSongs + 1];
    if (nextSong) {
      dispatch({ type: "SET_SONG", payload: { song: nextSong } });
    }
  };

  return (
    <>
      <Card className={classes.container} variant="outlined">
        <div className={classes.wrapper}>
          <div className={classes.nameWrapper}>
            <Typography variant="subtitle2" className={classes.typography}>
              {state.song.title}
            </Typography>
            <Typography variant="body2" className={classes.typography}>
              {state.song.artist}
            </Typography>
            <Divider />
            <div className={classes.controls}>
              <IconButton
                classes={{
                  root: classes.root,
                }}
                onClick={handlePlayPreviousSong}
              >
                <SkipPrevious />
              </IconButton>
              <IconButton
                classes={{
                  root: classes.root,
                }}
                onClick={handlePlaySong}
              >
                {state.isPlaying ? (
                  <Pause className={classes.playButton} />
                ) : (
                  <PlayArrow className={classes.playButton} />
                )}
              </IconButton>
              <IconButton
                classes={{
                  root: classes.root,
                }}
                onClick={handlePlayNextSong}
              >
                <SkipNext />
              </IconButton>
              <Typography
                variant="subtitle1"
                component="p"
                color="textSecondary"
              >
                {formatDuration(playedSeconds)}
              </Typography>
            </div>
            <Slider
              style={{ marginLeft: "4px" }}
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
          <img
            src={state.song.thumbnail}
            alt={state.song.title}
            className={classes.image}
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
          url={state.song.url}
          playing={state.isPlaying}
        />
      </Card>
      <QueuedSongList queuedSongs={data.queuedSongs} />
    </>
  );
};

export default SongPlayer;
