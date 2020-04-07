import { makeStyles } from "@material-ui/core";

export const useSongPlayerStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0 !important",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    padding: "10px !important",
  },
  playButton: {
    width: 30,
    height: 30,
  },
  image: {
    width: 130,
    height: 130,
    marginLeft: "auto",
  },
  wrapper: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "min-content auto",
    gridGap: 12,
    alignItems: "center",
    width: "100%",
  },
  nameWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    paddingLeft: 8,
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));
