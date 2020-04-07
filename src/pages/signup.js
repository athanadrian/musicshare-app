import React from "react";
import SEO from "../components/shared/Seo";
import { useSignUpPageStyles } from "../styles/pages/signup";
import { Link } from "react-router-dom";
import { LoginWithFacebook } from "./login";
import {
  Card,
  //CardHeader,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return (
    <>
      <SEO title="sign up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <Typography className={classes.cardHeaderSubHeader}>
              sign up here to see music that published by your friends
            </Typography>
            <LoginWithFacebook
              color="secondary"
              iconColor="white"
              variant="contained"
            />
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <form>
              <TextField
                fullWidth
                variant="filled"
                label="Email"
                type="email"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                fullWidth
                variant="filled"
                label="Full Name"
                margin="dense"
                className={classes.textField}
                autoComplete="fullname"
              />
              <TextField
                fullWidth
                variant="filled"
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                fullWidth
                variant="filled"
                label="password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="new-password"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                sign up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              have an account?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.loginButton}>
                log in
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
