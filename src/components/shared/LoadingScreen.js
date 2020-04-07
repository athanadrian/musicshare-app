import React from "react";
import { useLoadingScreenStyles } from "../../styles/components/shared/loadingScreen";
import { LogoMusicLoadingIcon } from "../../styles/icons";

function LoadingScreen() {
  const classes = useLoadingScreenStyles();

  return (
    <section className={classes.section}>
      <span>
        <LogoMusicLoadingIcon style={{ color: "#009688" }} />
      </span>
    </section>
  );
}

export default LoadingScreen;
