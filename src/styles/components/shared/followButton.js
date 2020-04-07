import { makeStyles } from "@material-ui/core";

/* FollowButton component: /components/shared/FollowButton.js */
export const useFollowButtonStyles = makeStyles({
  button: {
    height: "30px !important",
    width: "75px !important",
    padding: "0px 16px !important",
    marginTop: ({ side }) => `${side ? "0px !important" : "10px !important"}`
  }
});
