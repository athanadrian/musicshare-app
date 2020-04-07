import { makeStyles } from "@material-ui/core";

/* UserCard component: /components/shared/UserCard.js */
export const useUserCardStyles = makeStyles({
  avatar: {
    width: ({ avatarSize = 44 }) => avatarSize,
    height: ({ avatarSize = 44 }) => avatarSize
  },
  typography: {
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  wrapper: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "min-content auto",
    gridGap: 12,
    alignItems: "center",
    width: "100%"
  },
  nameWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
});
