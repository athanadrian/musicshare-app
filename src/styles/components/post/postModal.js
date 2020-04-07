import { makeStyles } from "@material-ui/core";

/* PostModal component: /components/post/PostModal.js */
export const usePostModalStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5) !important",
    zIndex: "1200 !important",
    padding: "0 40px !important",
    pointerEvents: "auto",
  },
  close: {
    padding: 12,
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 1201,
    cursor: "pointer",
  },
}));
