import { makeStyles } from "@material-ui/core";
import IconSheet from "../../images/logo_title.png";

/* Login page: /pages/login.js */
export const useLoginPageStyles = makeStyles({
  signUpCard: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "2fr 1fr",
  },
  card: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
  },
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  cardHeader: {
    backgroundImage: `url(${IconSheet})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "20px 0",
    height: 51,
    width: 175,
    margin: "22px auto 12px",
  },
  textField: {
    marginBottom: 6,
  },
  button: {
    margin: "8px 0px",
  },
  typography: {
    margin: "10px 0px",
  },
  orContainer: {
    margin: "10px 0px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridGap: 18,
    placeItems: "center",
  },
  orLine: {
    justifySelf: "stretch",
    height: 1,
    background: "#e6e6e6",
  },
  facebookIcon: {
    height: 16,
    width: 16,
    marginRight: 8,
  },
});
