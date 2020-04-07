import { makeStyles } from "@material-ui/core";

// OptionsDialog component: /components/shared/OptionsDialog.js
export const useOptionsDialogStyles = makeStyles((theme) => ({
  dialogScrollPaper: {
    display: "grid !important",
    gridTemplateColumns: "minmax(auto, 496px) !important",
  },
  button: {
    padding: "12px 8px !important",
  },
  redButton: {
    color: `${theme.palette.error.main} !important`,
    padding: "12px 8px !important",
    fontWeight: "bold !important",
  },
}));
