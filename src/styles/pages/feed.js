import { makeStyles } from "@material-ui/core";

/* Feed page: /pages/feed.js */
export const useFeedPageStyles = makeStyles((theme) => ({
  container: {
    //marginTop: 20,
    display: "grid",
    // gridAutoFlow: "column",
    gridTemplateColumns: "minmax(auto, 540px) 360px",
    gridGap: 35,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "minmax(auto, 600px)",
      justifyContent: "center",
    },
    "&.slickSlider": {
      display: "grid",
    },
  },
  songPlayerContainer: {
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      width: "100%",
      left: 0,
      bottom: 0,
    },
  },
  sidebarContainer: {
    display: "grid",
    margin: "0px 28px 24px",
    justifyContent: "center",
    gridTemplateColumns: "minmax(auto, 300px)",
  },
  sidebarWrapper: { position: "fixed", width: 325 },
}));
