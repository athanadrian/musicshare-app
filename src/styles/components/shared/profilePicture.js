import { makeStyles } from "@material-ui/core";

// ProfilePicture component: /components/shared/ProfilePicture.js
export const useProfilePictureStyles = makeStyles({
  person: {
    color: "#ffffff",
    height: ({ size = 150 }) => size,
    width: ({ size = 150 }) => size,
  },
  wrapper: {
    background: "#DBDBDB",
    width: ({ size = 150 }) => size,
    height: ({ size = 150 }) => size,
    borderRadius: "50%",
    display: "grid",
    position: "relative",
    placeItems: "center",
    "&:hover": {
      cursor: ({ isOwner }) => (isOwner ? "pointer" : "default"),
    },
  },
  section: {
    display: "grid",
    justifyContent: "center",
  },
  image: {
    height: ({ size = 150 }) => size,
    width: ({ size = 150 }) => size,
    borderRadius: "50%",
  },
});
