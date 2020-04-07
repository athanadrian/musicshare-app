import React, { lazy, Suspense } from "react";
import { useSubscription } from "@apollo/react-hooks";
import { GET_SONGS } from "../../graphql/subscriptions";
import { CircularProgress } from "@material-ui/core";
import FeedPostSkeleton from "./FeedPostSkeleton";
//import FeedPost from "./FeedPost";
const FeedPost = lazy(() => import("./FeedPost"));

function FeedPostList() {
  const { data, loading, error } = useSubscription(GET_SONGS);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  if (error) return <div>Error fetching songs</div>;

  return (
    <div>
      {data.songs.map((song) => (
        <Suspense
          key={song.id}
          fallback={
            <>
              <FeedPostSkeleton />
            </>
          }
        >
          <FeedPost song={song} />
        </Suspense>
      ))}
    </div>
  );
}

export default FeedPostList;
