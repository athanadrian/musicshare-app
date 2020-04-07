import React, { useState, createContext, useContext, useReducer } from "react";
import { useFeedPageStyles } from "../styles/pages/feed";

import { Hidden } from "@material-ui/core";

import Layout from "../components/shared/Layout";
import AddSong from "../components/song/AddSong";
import FeedSideSuggestions from "../components/feed/FeedSideSuggestions";
import FeedPostList from "../components/feed/FeedPostList";
import UserCard from "../components/shared/UserCard";
import SongPlayer from "../components/song/SongPlayer";
import LoadingScreen from "../components/shared/LoadingScreen";
import { LoadingLargeIcon } from "../styles/icons";
import songReducer from "../reducer";

export const SongContext = createContext({
  song: {
    id: "e072fcf2-30a3-4aff-85d1-068656a68daf",
    title: "City of angels (funky remix)",
    artist: "Maria Victoria",
    thumbnail:
      "https://i1.sndcdn.com/artworks-000693990808-eb5lt4-t500x500.jpg",
    url:
      "https://soundcloud.com/maria-victoria-401466296/city-of-angels-funky-remix-24k",
    duration: 124.003,
  },
  isPlaying: false,
});

function FeedPage() {
  const classes = useFeedPageStyles();
  const initialSongState = useContext(SongContext);
  const [state, dispatch] = useReducer(songReducer, initialSongState);
  const [isEndOfFeed] = useState(false);

  const loading = false;
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Layout>
        <div className={classes.container}>
          <FeedPostList />
          <Hidden>
            <div className={classes.sidebarContainer}>
              <div className={classes.sidebarWrapper}>
                <AddSong />
                <UserCard />
                <div className={classes.songPlayerContainer}>
                  <SongPlayer />
                </div>
                <FeedSideSuggestions />
              </div>
            </div>
          </Hidden>
          {!isEndOfFeed && <LoadingLargeIcon />}
        </div>
      </Layout>
    </SongContext.Provider>
  );
}

export default FeedPage;
