import { makeStyles } from "@material-ui/core";

export const useAddSongStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  inputUrl: {
    margin: theme.spacing(1)
  },
  addSongButton: {
    margin: theme.spacing(1)
  },
  dialog: {
    textAlign: "center"
  },
  thumbnail: {
    width: "90%"
  }
}));
