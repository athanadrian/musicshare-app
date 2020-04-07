import React from "react";
import Layout from "../components/shared/Layout";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NotFoundPage({ minimalNavbar = true }) {
  return (
    <Layout
      minimalNavbar={minimalNavbar}
      title="Not found page"
      marginTop={120}
    >
      <Typography variant="h5" align="center" paragraph>
        Sorry, this page is not available!
      </Typography>
      <Typography align="center">
        The link you followed maybe broken, or the page maybe have been removed,
        <Link to="/">
          {" "}
          <Typography color="primary" component="span">
            Go back το musiCShare!
          </Typography>
        </Link>
      </Typography>
    </Layout>
  );
}

export default NotFoundPage;
