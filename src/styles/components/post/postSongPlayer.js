import { makeStyles } from "@material-ui/core";

export const usePostSongPlayerStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 !important",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "15px 15px",
  },
  content: {
    padding: "0px !important",
    flex: "1 0 auto",
    //flex: "1 0 auto",
  },
  thumbnail: {
    width: 75,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  playButton: {
    width: 24,
    height: 24,
  },
  queButton: {
    width: 24,
    height: 24,
    marginLeft: 150,
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  songWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
}));
