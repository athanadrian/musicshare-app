import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-modal";
import Post from "./Post";
import { CloseIcon } from "../../styles/icons";
import { usePostModalStyles } from "../../styles/components/post/postModal";

function PostModal({ song }) {
  const classes = usePostModalStyles();
  const { postId } = useParams();
  const history = useHistory();

  return (
    <>
      <Modal
        isOpen
        overlayClassName={classes.overlay}
        onRequestClose={() => history.goBack()}
        style={{
          content: {
            display: "flex",
            alignItems: "center",
            maxWidth: 935,
            width: "100%",
            top: "20%",
            left: "auto",
            right: "13%",
            bottom: "auto",
            transform: "translate(-50% -50%)",
            margin: 0,
            padding: 0,
            overflow: "none",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <Post id={postId} />
      </Modal>
      <div onClick={() => history.goBack()} className={classes.close}>
        <CloseIcon />
      </div>
    </>
  );
}

export default PostModal;
