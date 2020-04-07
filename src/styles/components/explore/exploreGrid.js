import { makeStyles, withStyles, Tooltip } from "@material-ui/core";

/* ExploreGrid component: /components/explore/ExploreGrid.js */
export const useExploreGridStyles = makeStyles((theme) => ({
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
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

export const RedTooltip = withStyles({
  popper: {
    zIndex: "1100 !important",
  },
  arrow: {
    color: "#ed4956",
  },
  tooltip: {
    backgroundColor: "#ed4956",
    color: "#fff",
  },
})(Tooltip);

export const WhiteTooltip = withStyles({
  arrow: {
    color: "#fff",
    filter: "drop-shadow(1px 0px 2px #ccc)",
  },
  tooltip: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 0,
    pointerEvents: "all",
    boxShadow: "0 0 5px 1px rgba(var(--jb7,0,0,0),.0975)",
  },
})(Tooltip);
