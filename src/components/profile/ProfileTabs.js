import React, { useState } from "react";
import { useProfileTabsStyles } from "../../styles/components/profile/profileTabs";
import { Hidden, Divider, Tabs, Tab, Typography } from "@material-ui/core";
import { GridIcon, SaveIcon } from "../../styles/icons";
import GridPost from "../shared/GridPost";
function ProfileTabs({ isOwner, user }) {
  const classes = useProfileTabsStyles();
  const [value, setValue] = useState(0);

  return (
    <section className={classes.section}>
      <Hidden xsDown>
        <Divider />
      </Hidden>
      <Hidden xsDown>
        <Tabs
          value={value}
          onChange={(_, value) => setValue(value)}
          classes={{ indicator: classes.tabsIndicator }}
        >
          <Tab
            icon={<span className={classes.postsIconLarge} />}
            label="POSTS"
            classes={{
              root: classes.tabRoot,
              labelIcon: classes.tabLabelIcon,
              wrapper: classes.tabWrapper,
            }}
          />
          {isOwner && (
            <Tab
              icon={<span className={classes.savedIconLarge} />}
              label="SAVED"
              classes={{
                root: classes.tabRoot,
                labelIcon: classes.tabLabelIcon,
                wrapper: classes.tabWrapper,
              }}
            />
          )}
        </Tabs>
      </Hidden>
      <Hidden smUp>
        <Tabs
          value={value}
          onChange={(_, value) => setValue(value)}
          classes={{ indicator: classes.tabsIndicator }}
        >
          <Tab
            icon={<GridIcon fill={value === 0 ? "#3897f0" : ""} />}
            classes={{
              root: classes.tabRoot,
            }}
          />
          {isOwner && (
            <Tab
              icon={<SaveIcon fill={value === 1 ? "#3897f0" : ""} />}
              classes={{
                root: classes.tabRoot,
              }}
            />
          )}
        </Tabs>
      </Hidden>
      <Hidden smUp>{user.posts.length === 0 && <Divider />}</Hidden>
      {value === 0 && <ProfilePosts user={user} isOwner={isOwner} />}
      {value === 1 && <SavedPosts user={user} />}
    </section>
  );
}

function ProfilePosts({ user, isOwner }) {
  const classes = useProfileTabsStyles();

  if (user.posts.length === 0) {
    return <NoPosts isOwner={isOwner} profilePosts={true} />;
  }
  return (
    <article className={classes.article}>
      <div className={classes.postContainer}>
        {user.posts.map((song) => (
          <GridPost key={song.id} song={song} />
        ))}
      </div>
    </article>
  );
}

function SavedPosts({ isOwner }) {
  return <NoPosts isOwner={isOwner} />;
}

function NoPosts({ profilePosts, isOwner }) {
  const classes = useProfileTabsStyles();

  return (
    <section
      className={
        profilePosts ? classes.profilePostsSection : classes.savedPostsSection
      }
    >
      <div className={classes.noContent}>
        <div
          className={
            profilePosts ? classes.uploadPhotoIcon : classes.savePhotoIcon
          }
        />
        {profilePosts ? (
          <Typography variant="h4">
            {isOwner ? "Upload a Song" : "No Songs Yet"}
            {isOwner && !profilePosts ? "Save" : ""}
          </Typography>
        ) : (
          <>
            <Typography variant="h4">Save</Typography>
            <Typography align="center">
              Save songs you wnat to listen to them again. No one is notified
              and only you can see what you have saved!
            </Typography>
          </>
        )}
      </div>
    </section>
  );
}

export default ProfileTabs;
