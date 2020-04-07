import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Hidden,
  Divider,
  TextField,
} from "@material-ui/core";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { useFeedPostStyles } from "../../styles/components/feed/feedPost";
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
import FollowSuggestions from "../../components/shared/FollowSuggestions";
import SongItem from "../../components/song/SongItem";
import OptionsDialog from "../../components/shared/OptionsDialog";
import { defaultUser } from "../../dev-data/data";

function FeedPost({ song, index }) {
  const classes = useFeedPostStyles();
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
  } = song;
  const [showOptionsDialog, setOptionsDialog] = useState(false);
  const [showCaption, setCaption] = useState();
  const showFollowSuggestions = index === 1;

  return (
    <>
      <article
        className={classes.article}
        style={{ marginBottom: showFollowSuggestions && 30 }}
      >
        <div className={classes.postHeader}>
          <UserCard user={user} avatarSize={50} />
          <MoreIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        <div>
          <img src={thumbnail} alt="Song Post" className={classes.image} />
        </div>
        <div>
          <SongItem song={song} />
        </div>
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
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                className={classes.username}
                variant="subtitle2"
                component="span"
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant="body2"
                component="span"
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  className={classes.caption}
                  maxLine="0"
                  ellipsis="..."
                  basedOn="letters"
                />
                <Button
                  className={classes.moreButton}
                  onClick={() => setCaption(!showCaption)}
                >
                  more
                </Button>
              </div>
            )}
          </div>
          <Link to={`/p/${id}`}>
            <Typography
              variant="body2"
              component="div"
              className={classes.commmentsLink}
            >
              {comments.length > 0
                ? `View all ${comments.length}`
                : "No comments yet"}
            </Typography>
          </Link>
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
          <Typography color="textSecondary" className={classes.datePosted}>
            5 DAYS AGO
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment />
        </Hidden>
      </article>
      {showFollowSuggestions && <FollowSuggestions />}
      {showOptionsDialog && (
        <OptionsDialog onClose={() => setOptionsDialog(false)} />
      )}
    </>
  );
}

function LikeButton() {
  const classes = useFeedPostStyles();
  const [liked, setLiked] = useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;

  return <Icon className={className} onClick={() => setLiked(!liked)} />;
}
function SaveButton() {
  const classes = useFeedPostStyles();
  const [saved, setSaved] = useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;

  return <Icon className={classes.saveIcon} onClick={() => setSaved(!saved)} />;
}
function Comment() {
  const classes = useFeedPostStyles();
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

export default FeedPost;
