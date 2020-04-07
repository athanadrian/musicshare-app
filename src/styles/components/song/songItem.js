import { makeStyles } from "@material-ui/core";

export const useSongItemStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    border: "none",
    borderBottom: "1px solid #e6e6e6",
    borderRadius: 0
  },
  songInfoContainer: {
    display: "flex",
    alignItems: "center"
  },
  songInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  thumbnail: {
    width: 150,
    height: 150,
    objectFit: "cover"
  },
  error: {
    color: "warning"
  }
}));
