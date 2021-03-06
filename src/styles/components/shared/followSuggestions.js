import { makeStyles } from "@material-ui/core";

/* FollowSuggestions component: /components/shared/FollowSuggestions.js */
const border = "1px solid #e6e6e6";
const marginBottom = "20px !important";
export const useFollowSuggestionsStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100vw",
  },
  slide: {
    padding: "10px 0px 20px 0px !important",
    marginBottom,
    // border,
    borderTop: "none",
    "& .slick-slide > div": {
      background: "#ffffff",
      border,
      margin: "0px 10px !important",
      padding: "20px !important",
    },
    "& .slick-next:before, & .slick-prev:before": {
      color: "rgb(38, 38, 38)",
      fontSize: "24px !important",
    },
  },
  typography: {
    borderBottom: "none !important",
    padding: "0px 0px 0px 12px !important",
  },
  skeleton: {
    display: "grid",
    gridAutoFlow: "column",
    marginBottom,
    gridGap: 16,
  },
  avatar: {
    width: 54,
    height: 54,
  },
  avatarImg: {
    userSelect: "none",
  },
  text: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
  },
  card: {
    display: "grid",
    justifyItems: "center",
    width: 138,
    [theme.breakpoints.down("xs")]: {
      width: 116,
    },
  },
}));
