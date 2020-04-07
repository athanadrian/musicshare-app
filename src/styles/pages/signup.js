import { makeStyles } from "@material-ui/core";
import IconSheet from "../../images/logo_title.png";

// SignUp page: /pages/signup.js
export const useSignUpPageStyles = makeStyles({
  card: { maxWidth: 348, padding: "16px 40px", marginBottom: 10 },
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
  cardHeaderSubHeader: {
    textAlign: "center",
    fontWeight: "bold !important",
    lineHeight: 1.2,
    color: "#999",
    margin: "0 0 20px",
  },
  textField: {
    marginBottom: 6,
  },
  button: {
    margin: "10px 0px 16px 0px",
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
  loginCard: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 2fr",
  },
  loginButton: {
    justifySelf: "start",
  },
});
