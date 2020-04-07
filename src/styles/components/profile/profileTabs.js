import { makeStyles } from "@material-ui/core";
import IconSheet from "../../../images/icon-sheet.png";
import IconSheet2 from "../../../images/icon-sheet-2.png";

const commonIconProps = {
  backgroundImage: `url(${IconSheet2})`,
  backgroundRepeat: "no-repeat",
  height: 12,
};

export const useProfileTabsStyles = makeStyles((theme) => {
  const postsIconSmallGrey = {
    ...commonIconProps,
    backgroundImage: `url(${IconSheet})`,
    backgroundPosition: "-331px -199px",
    backgroundSize: "355px 344px",
    height: 24,
    width: 24,
  };
  const savedIconSmallGrey = {
    ...commonIconProps,
    backgroundImage: `url(${IconSheet})`,
    backgroundPosition: "-50px -320px",
    backgroundSize: "355px 344px",
    height: 24,
    width: 24,
  };
  return {
    tabs: {
      borderBottom: "1px solid rgba(var(--b38,219,219,219),1)",
    },
    section: {
      [theme.breakpoints.up("sm")]: {
        marginTop: 24,
      },
    },
    tabsIndicator: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      top: 0,
      backgroundColor: "#000000 !important",
    },
    tabRoot: {
      margin: "0px 20px",
      opacity: 0.5,
    },
    tabLabelIcon: {
      minHeight: "unset !important",
    },
    tabWrapper: {
      flexDirection: "row !important",
    },
    postsIconLarge: {
      ...commonIconProps,
      backgroundPosition: "-189px -366px",
      backgroundSize: "410px 396px",
      width: 12,
    },
    savedIconLarge: {
      ...commonIconProps,
      backgroundSize: "410px 396px",
      backgroundPosition: "-401px 0",
      width: 10,
    },
    postsIconSmall: postsIconSmallGrey,
    postsIconSmallBlue: {
      ...postsIconSmallGrey,
      backgroundPosition: "-331px -174px",
    },
    savedIconSmall: savedIconSmallGrey,
    savedIconSmallBlue: {
      ...savedIconSmallGrey,
      backgroundPosition: "0px -320px",
    },
    savedPostsSection: {
      paddingTop: 60,
      display: "grid",
      justifyContent: "center",
    },
    noContent: {
      display: "grid",
      placeItems: "center",
      gridTemplateColumns: "minmax(auto, 345px)",
      "& *": {
        marginBottom: 16,
      },
    },
    savePhotoIcon: {
      ...commonIconProps,
      height: 62,
      width: 62,
      backgroundSize: "410px 396px",
      backgroundPosition: "-189px -273px",
    },
    image: {
      width: "100%",
      userSelect: "none",
    },
    imageWrapper: {
      position: "relative",
    },
    postMeta: {
      [theme.breakpoints.down("xs")]: {
        gridAutoFlow: "row",
        alignContent: "space-evenly",
      },
      position: "absolute",
      display: "grid",
      placeItems: "center",
      gridAutoFlow: "column",
      width: "100%",
      height: "100%",
      justifyContent: "space-evenly",
      "&:hover": {
        background: "rgba(0,0,0,0.6)",
        cursor: "pointer",
        "& > div": {
          opacity: 1,
        },
      },
    },
    postMetaItems: {
      color: "#ffffff",
      display: "grid",
      gridAutoFlow: "column",
      gridGap: 5,
      placeItems: "center",
      opacity: 0,
    },
    likes: {
      ...commonIconProps,
      backgroundPosition: "-328px -239px",
      backgroundSize: "355px 344px",
      height: 16,
      width: 16,
    },
    comments: {
      ...commonIconProps,
      backgroundPosition: "-327px -203px",
      backgroundSize: "355px 344px",
      height: 16,
      width: 18,
    },
    profilePostsSection: {
      paddingTop: 60,
      display: "grid",
      justifyContent: "center",
    },
    noPicDivAlt: {
      display: "grid",
      placeItems: "center",
      "& div": {
        marginBottom: 16,
      },
    },
    uploadPhotoIcon: {
      ...commonIconProps,
      backgroundSize: "410px 396px",
      backgroundPosition: "0px -273px",
      height: 62,
      width: 62,
    },
    article: {
      display: "grid",
      gridTemplateColumns: "minmax(auto, 935px)",
    },
    postContainer: {
      [theme.breakpoints.down("sm")]: {
        gridGap: 2,
      },
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 20,
    },
  };
});
