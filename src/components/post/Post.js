import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Hidden,
  Divider,
  TextField,
} from "@material-ui/core";
import { usePostStyles } from "../../styles/components/post/post";
import {
  MoreIcon,
  CommentIcon,
  ShareIcon,
  UnlikeIcon,
  LikeIcon,
  RemoveIcon,
  SaveIcon,
} from "../../styles/icons";
import UserCard from "../../components/shared/UserCard";
import PostSongPlayer from "../../components/post/PostSongPlayer";
import OptionsDialog from "../../components/shared/OptionsDialog";
import { defaultUser, defaultSong } from "../../dev-data/data";
import PostSkeleton from "./PostSkeleton";

//TODO change to upcoming sonng accordingly
//function Post({ song, index }) {
// console.log("songP", song);
function Post() {
  const classes = usePostStyles();
  const {
    id,
    likes,
    caption,
    comments = [],
    // title,
    // artist,
    user = defaultUser,
    thumbnail,
    //url
  } = defaultSong;
  const [isLoading, setLoading] = useState(true);
  const [showOptionsDialog, setOptionsDialog] = useState(false);

  setTimeout(() => setLoading(false), 3000);
  if (isLoading) {
    return <PostSkeleton />;
  }

  return (
    <div className={classes.postContainer}>
      {/* Post header */}
      <article className={classes.article}>
        <div className={classes.postHeader}>
          <UserCard user={user} avatarSize={32} />
          <MoreIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        {/* Post Image */}
        <div className={classes.postImage}>
          <img src={thumbnail} alt="Song Post" className={classes.image} />
        </div>
        {/* Post Buttons */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.likes} variant="subtitle2">
            <span>{likes === 1 ? `${likes} Like` : `${likes} Likes`}</span>
          </Typography>
          <div className={classes.postCaptionContainer}>
            <Typography
              className={classes.postCaption}
              variant="body2"
              component="span"
              dangerouslySetInnerHTML={{ __html: caption }}
            />
            {comments.map((comment) => (
              <div key={comment.id}>
                <Link to={`/${comment.user.usernmame}`}>
                  <Typography
                    variant="subtitle2"
                    component="span"
                    className={classes.commentUsername}
                  >
                    {comment.user.usernmame}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.comment}
                  >
                    {comment.content}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>
          <Typography color="textSecondary" className={classes.datePosted}>
            5 DAYS AGO
          </Typography>
          <Hidden xsDown>
            <div className={classes.comment}>
              <Divider />
              <Comment />
            </div>
            {/* Post Song Player */}
            <div className={classes.player}>
              <PostSongPlayer song={defaultSong} />
            </div>
          </Hidden>
        </div>
      </article>
      {showOptionsDialog && (
        <OptionsDialog onClose={() => setOptionsDialog(false)} />
      )}
    </div>
  );
}

function LikeButton() {
  const classes = usePostStyles();
  const [liked, setLiked] = useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;

  return <Icon className={className} onClick={() => setLiked(!liked)} />;
}
function SaveButton() {
  const classes = usePostStyles();
  const [saved, setSaved] = useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;

  return <Icon className={classes.saveIcon} onClick={() => setSaved(!saved)} />;
}
function Comment() {
  const classes = usePostStyles();
  const [comment, setComment] = useState("");

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={comment}
        placeholder="add a commnet..."
        className={classes.textfField}
        multiline
        rowsMax={2}
        rows={1}
        onChange={(e) => setComment(e.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
      />
      <Button
        color="primary"
        className={classes.commentButton}
        disabled={!comment.trim()}
      >
        Post
      </Button>
    </div>
  );
}

export default Post;
