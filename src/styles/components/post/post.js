import { makeStyles } from "@material-ui/core";

/* Post component: /components/post/Post.js */
export const usePostStyles = makeStyles((theme) => ({
  moreIcon: {
    height: 24,
    width: 18,
    justifySelf: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
  },
  postButtons: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "24px 24px 24px minmax(24px, auto)",
    gridGap: 16,
    order: 2,
    padding: "6px 16px 0 !important",
  },
  container: {
    padding: "0px 16px 8px !important",
  },
  username: {
    fontWeight: "600 !important",
    marginRight: "5px !important",
  },
  datePosted: {
    fontSize: "10px !important",
    order: 4,
    padding: "6px 16px !important",
  },
  comment: {
    order: 5,
  },
  player: {
    order: 6,
  },
  likes: {
    fontWeight: "600 !important",
    order: 3,
    padding: "0 16px !important",
    "&:hover": {
      cursor: "pointer",
    },
  },
  like: {
    animation: "$like-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  liked: {
    animation: "$liked-button-animation 0.45s",
    animationTimingFunction: "ease-in-out",
    transform: "scale(1)",
  },
  "@keyframes like-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  "@keyframes liked-button-animation": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.2)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
  textField: {
    padding: "10px 0px !important",
  },
  root: {
    fontSize: "14px !important",
  },
  underline: {
    "&::before": {
      border: "none !important",
    },
    "&::after": {
      border: "none !important",
    },
    "&:hover&:before": {
      border: "none !important",
    },
  },
  commentContainer: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(auto, 56px)",
    padding: "0px 0px 0px 16px !important",
  },
  commentButton: {
    width: "48px !important",
    padding: "unset !important",
  },
  moreButton: {
    color: "#999 !important",
    padding: "0px !important",
    "&:hover": {
      background: "transparent !important",
    },
  },
  saveIcon: {
    justifySelf: "right",
  },
  postContainer: {
    background: "#fff",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      marginTop: "-35px !important",
    },
  },
  article: {
    display: "flex",
    border: "1px solid rgba(var(--b6a,219,219,219),1)",
    borderBottomRightRadius: "3px",
    borderTopRightRadius: "3px",
    position: "relative",
    flexDirection: "column",
    width: "100%",
  },
  postHeader: {
    borderLeft: "1px solid rgba(var(--ce3,239,239,239),1)",
    borderBottom: "1px solid rgba(var(--ce3,239,239,239),1)",
    height: "72px",
    padding: "16px",
    right: "0",
    width: "335px",
    display: "flex",
    top: 0,
    position: "absolute",
    marginRight: "0px !important",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      width: "100% !important",
      position: "relative !important",
    },
  },
  postImage: {
    display: "flex",
    width: "calc(100% - 335px)",
    [theme.breakpoints.only("xs")]: {
      width: "initial !important",
      position: "relative !important",
      margin: "0 auto !important",
      textAlign: "center",
      "& img": {
        maxHeight: "200px !important",
        maxWidth: "200px !important",
        objectFit: "contain !important",
      },
    },
  },
  postButtonsWrapper: {
    borderLeft: "1px solid rgba(var(--ce3,239,239,239),1)",
    bottom: "0",
    boxSizing: "border-box",
    position: "absolute",
    flexDirection: "column",
    display: "flex",
    right: "0",
    top: "72px",
    width: "335px",
    [theme.breakpoints.only("xs")]: {
      width: "100% !important",
      position: "relative !important",
      top: "0px !important",
    },
  },
  postCaptionContainer: {
    display: "flex",
    margin: "0 0 auto !important",
    order: 1,
    overflowX: "hidden",
    flexGrow: 1,
    overflow: "hidden",
    [theme.breakpoints.only("xs")]: {
      display: "none !important",
    },
  },
  postCaption: {
    overflowY: "scroll",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "5px",
  },
}));
