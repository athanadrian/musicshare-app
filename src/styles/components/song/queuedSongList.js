import { makeStyles } from "@material-ui/core";

export const useQueuedSongListStyles = makeStyles({
  container: {
    width: "100%",
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "50px auto 50px",
    alignItems: "center",
    marginTop: 10
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  songInfoContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  avatar: {
    width: 44,
    height: 44
  }
});
