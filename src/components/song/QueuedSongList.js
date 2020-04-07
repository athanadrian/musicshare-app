import React from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useQueuedSongListStyles } from "../../styles/components/song/queuedSongList";
import { ADD_OR_REMOVE_FROM_QUEUED_SONGS } from "../../graphql/mutations";

const QueuedSongList = ({ queuedSongs }) => {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    greaterThanMd && (
      <div
        style={{
          margin: "10px 0",
        }}
      >
        <Typography variant="button" color="textSecondary">
          My List - ({queuedSongs.length})
        </Typography>
        {queuedSongs.map((qSong, i) => (
          <QueuedSong key={qSong.id} qSong={qSong} />
        ))}
      </div>
    )
  );
};

function QueuedSong({ qSong }) {
  const classes = useQueuedSongListStyles();
  const { title, artist, thumbnail } = qSong;
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
    addOrRemoveFromQueuedSongs({
      variables: { input: { ...qSong }, __typename: "Song" },
    });
  };

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar} src={thumbnail} />
      <div className={classes.songInfoContainer}>
        <Typography variant="subtitle2" className={classes.text}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.text}
        >
          {artist}
        </Typography>
      </div>
      <IconButton
        size="small"
        color="secondary"
        onClick={handleOrRemoveFromQueuedSongs}
      >
        <Delete color="error" />
      </IconButton>
    </div>
  );
}

export default QueuedSongList;
