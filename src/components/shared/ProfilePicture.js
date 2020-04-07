import React from "react";
import { useProfilePictureStyles } from "../../styles/components/shared/profilePicture";
import { Person } from "@material-ui/icons";

function ProfilePicture({
  isOwner,
  image = "https://findicons.com/files/icons/2071/political_character/256/kim_yongii256.png",
  size,
}) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />{" "}
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
