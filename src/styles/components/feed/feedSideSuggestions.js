import { makeStyles } from "@material-ui/core";

/* Suggestions: /components/feed/FeedSideSuggestions.js */
export const useFeedSideSuggestionsStyles = makeStyles(theme => ({
  article: {
    margin: "12px 0",
    gridTemplateColumns: "minmax(auto, 600px)",
    justifyContent: "center"
  },
  card: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "minmax(auto, 500px)",
    gridGap: 10,
    alignItems: "center",
    padding: "8px 16px !important"
  },
  typography: {
    paddingLeft: `16px !important`,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem !important"
    }
  },
  paper: {
    padding: "8px 0 !important"
  }
}));

// OptionsDialog component: /components/shared/OptionsDialog.js
export const useOptionsDialogStyles = makeStyles(theme => ({
  dialogScrollPaper: {
    display: "grid !important",
    gridTemplateColumns: "minmax(auto, 496px) !important"
  },
  button: {
    padding: "12px 8px !important"
  },
  redButton: {
    color: `${theme.palette.error.main} !important`,
    padding: "12px 8px !important",
    fontWeight: "bold !important"
  }
}));
