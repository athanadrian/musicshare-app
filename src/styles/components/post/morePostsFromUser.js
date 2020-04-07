import { makeStyles } from "@material-ui/core";

export const useMorePostsFromUserStyles = makeStyles((theme) => ({
  article: {
    display: "grid",
    gridTemplateColumns: "minmax(auto, 935px)",
    width: "100vw",
  },
  postContainer: {
    [theme.breakpoints.down("sm")]: {
      gridGap: 2,
    },
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 20,
  },
  typography: {
    fontWeight: "bold !important",
    marginBottom: `${theme.spacing(2)} !important`,
    marginLeft: `${theme.spacing(1)} !important`,
  },
  container: {
    paddingTop: "6vh",
  },
  link: {
    color: "#262626",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
