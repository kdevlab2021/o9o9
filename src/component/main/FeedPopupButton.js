import React, { useState } from "react";
import "./FeedPopupButton.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import Modal from "./FeedModal";

function FeedPopupButton() {
  // const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const user = {
    profilePic:
      "https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png",
    message: "WOW this works! ",
    timestamp: "This is a timestamp",
    username: "emilyoun",
    image:
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
  };

  //
  const handleSubmit = (e) => {
    //! to prevent page refreshing when when we submit
    e.preventDefault();

    //!some clever db stuff here
    // db.collection("posts").add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: imageUrl,
    // });

    //!resets enter
    setInput("");
    setImageUrl("");
  };

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="FeedPopupButton">
      <div className="FeedPopupButton__top">
        <div>
          <Avatar src={user.photoURL} />
          <input
            readOnly
            value={input}
            // onChange={(e) => setInput(e.target.value)}
            onClick={openModal}
            className="FeedPopupButton__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <Modal open={modalOpen} close={closeModal} header="Modal heading">
            모달창에 데이터 전송
          </Modal>

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </div>
      </div>

      <div className="FeedPopupButton__bottom">
        <div className="FeedPopupButton__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="FeedPopupButton__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="FeedPopupButton__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default FeedPopupButton;
