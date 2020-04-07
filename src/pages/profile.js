import React, { useState } from "react";
import { useProfilePageStyles } from "../styles/pages/profile";
import { defaultUser, defaultCurrentUser } from "../dev-data/data";
import {
  Hidden,
  Card,
  CardContent,
  Button,
  Typography,
  Dialog,
  Divider,
  DialogTitle,
  Zoom,
  Avatar,
} from "@material-ui/core";
import Layout from "../components/shared/Layout";
import ProfilePicture from "../components/shared/ProfilePicture";
import ProfileTabs from "../components/profile/ProfileTabs";
import { Link } from "react-router-dom";
import { GearIcon } from "../styles/icons";

function ProfilePage() {
  const classes = useProfilePageStyles();
  const [showOptionsMenu, setOptionsMenu] = useState();
  const isOwner = true;

  const handleOptionsMenuClick = () => {
    setOptionsMenu(!showOptionsMenu);
  };
  return (
    <Layout title={`${defaultUser.username} @${defaultUser.username}`}>
      <div className={classes.container}>
        <Hidden xsDown>
          <Card className={classes.cardLarge}>
            <ProfilePicture isOwner={isOwner} />
            <CardContent className={classes.cardContentLarge}>
              <ProfileNameSection
                user={defaultCurrentUser}
                isOwner={isOwner}
                handleOptionsMenuClick={handleOptionsMenuClick}
              />
              <PostCountSection user={defaultCurrentUser} />
              <NameBioSection user={defaultCurrentUser} />
            </CardContent>
          </Card>
        </Hidden>
        <Hidden smUp>
          <Card className={classes.cardSmall}>
            <CardContent>
              <section className={classes.sectionSmall}>
                <ProfilePicture size={77} isOwner={isOwner} />
                <ProfileNameSection
                  user={defaultCurrentUser}
                  isOwner={isOwner}
                  handleOptionsMenuClick={handleOptionsMenuClick}
                />
              </section>
              <NameBioSection user={defaultCurrentUser} />
            </CardContent>
            <PostCountSection user={defaultCurrentUser} />
          </Card>
        </Hidden>
        {showOptionsMenu && (
          <OptionsMenu handleOptionsMenuClick={handleOptionsMenuClick} />
        )}
        <ProfileTabs user={defaultCurrentUser} isOwner={isOwner} />
      </div>
    </Layout>
  );
}

function ProfileNameSection({ isOwner, user, handleOptionsMenuClick }) {
  const classes = useProfilePageStyles();
  const [showUnFollowDialog, setUnFollowDialog] = useState(false);
  let followButton;
  const isFollowing = true;
  const isFollower = true;

  const handleUnFollowDialogClick = () => {
    setUnFollowDialog(!showUnFollowDialog);
  };
  if (isFollowing) {
    followButton = (
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleUnFollowDialogClick}
      >
        Following
      </Button>
    );
  } else if (isFollower) {
    followButton = (
      <Button variant="contained" color="primary" className={classes.button}>
        Follow Back
      </Button>
    );
  } else {
    followButton = (
      <Button variant="contained" color="primary" className={classes.button}>
        Follow
      </Button>
    );
  }
  return (
    <>
      <Hidden xsDown>
        <section className={classes.usernameSection}>
          <Typography className={classes.username}>{user.username}</Typography>
          {isOwner ? (
            <>
              <Link to={`/accounts/edit`}>
                <Button variant="outlined">Edit Profile</Button>
              </Link>
              <div
                className={classes.settingsWrapper}
                onClick={handleOptionsMenuClick}
              >
                <GearIcon className={classes.settings} />
              </div>
            </>
          ) : (
            <>{followButton}</>
          )}
        </section>
      </Hidden>
      <Hidden smUp>
        <section>
          <div className={classes.usernameDivSmall}>
            <Typography className={classes.username}>
              {user.username}
            </Typography>
            {isOwner && (
              <div
                className={classes.settingsWrapper}
                onClick={handleOptionsMenuClick}
              >
                <GearIcon className={classes.settings} />
              </div>
            )}
          </div>
          {isOwner ? (
            <Link to={`/accounts/edit`}>
              <Button variant="outlined">Edit Profile</Button>
            </Link>
          ) : (
            <>{followButton}</>
          )}
        </section>
      </Hidden>
      {showUnFollowDialog && (
        <UnfollowDialog onClose={handleUnFollowDialogClick} user={user} />
      )}
    </>
  );
}

function UnfollowDialog({ onClose, user }) {
  const classes = useProfilePageStyles();

  return (
    <>
      <Dialog
        open
        classes={{
          scrollPaper: classes.unfollowDialogScrollPaper,
        }}
        onClose={onClose}
        TransitionComponent={Zoom}
      >
        <div className={classes.wrapper}>
          <Avatar
            src={user.profile_image}
            alt={`${user.username}`}
            className={classes.avatar}
          />
        </div>
        <Typography
          variant="body2"
          className={classes.unfollowDialogText}
          align="center"
        >
          Unfollow @{`${user.username}`}
        </Typography>
        <Divider />
        <Button className={classes.unfollowButton}>Unfollow</Button>
        <Divider />
        <Button className={classes.cancelButton} onClick={onClose}>
          Cancel
        </Button>
      </Dialog>
    </>
  );
}

function PostCountSection({ user }) {
  const classes = useProfilePageStyles();
  const options = ["posts", "followers", "following"];
  return (
    <>
      <Hidden smUp>
        <Divider />
      </Hidden>
      <section className={classes.followingSection}>
        {options.map((option) => (
          <div key={option} className={classes.followingText}>
            <Typography className={classes.followingCount}>
              {user[option].length}
            </Typography>
            <Hidden xsDown>
              <Typography>{option}</Typography>
            </Hidden>
            <Hidden smUp>
              <Typography color="textSecondary">{option}</Typography>
            </Hidden>
          </div>
        ))}
      </section>
      <Hidden smUp>
        <Divider />
      </Hidden>
    </>
  );
}

function NameBioSection({ user }) {
  const classes = useProfilePageStyles();
  const { name, bio, website } = user;

  return (
    <section>
      <Typography color="textSecondary" className={classes.typography}>
        {name}
      </Typography>
      <Typography>{bio}</Typography>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <Typography color="secondary" className={classes.typography}>
          {website}
        </Typography>
      </a>
    </section>
  );
}

function OptionsMenu({ handleOptionsMenuClick }) {
  const classes = useProfilePageStyles();
  const [showLogoutMessage, setLogoutMessage] = useState();

  const handleLogoutClick = () => {
    setLogoutMessage(!showLogoutMessage);
  };
  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.dialogScrollPaper,
        paper: classes.dialogPaper,
      }}
      TransitionComponent={Zoom}
    >
      {showLogoutMessage ? (
        <DialogTitle className={classes.dialogTitle}>
          Logging out
          <Typography color="textPrimary">
            You need to log back in to continue using musiCShare!
          </Typography>
        </DialogTitle>
      ) : (
        <>
          <OptionItem text="Change Password" onClick={() => {}} />
          <OptionItem text="Nametag" onClick={() => {}} />
          <OptionItem text="Authorized Apps" onClick={() => {}} />
          <OptionItem text="Notifications" onClick={() => {}} />
          <OptionItem text="Privacy" onClick={() => {}} />
          <OptionItem text="Log out" onClick={handleLogoutClick} />
          <OptionItem text="Cancel" onClick={handleOptionsMenuClick} />
        </>
      )}
    </Dialog>
  );
}

function OptionItem({ text, onClick }) {
  return (
    <>
      <Button style={{ padding: "12px 8px" }} onClick={onClick}>
        {text}
      </Button>
      <Divider />
    </>
  );
}

export default ProfilePage;
