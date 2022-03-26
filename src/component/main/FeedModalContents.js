import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { ButtonBase } from "@mui/material";
import "./FeedModalContents.css";

const FeedModalContents = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const user = {
    profilePic:
      "https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png",
    message: "WOW this works! ",
    timestamp: "This is a timestamp",
    username: "emilyoun",
    image:
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt="preview-img"
            style={{ width: "100px", padding: "10px" }}
          />
        )}
        <TextField
          style={{ display: "flex", padding: "5", flex: "1" }}
          multiline
          rows={5}
          placeholder="내용을 입력해주세요."
          variant="outlined"
        ></TextField>
      </div>
      <form name="myform">
        <div className="messageSender">
          <div className="messageSender__bottom">
            <div className="messageSender__option">
              <ButtonBase variant="contained" component="label">
                <input
                  type="file"
                  hidden
                  onChange={(e) => encodeFileToBase64(e.target.files[0])}
                />
                <PhotoLibraryIcon style={{ color: "green" }} />
                &nbsp;&nbsp;<h3>Photo</h3>
              </ButtonBase>
            </div>

            <div className="messageSender__option">
              <ButtonBase variant="contained" component="label">
                <input
                  type="file"
                  hidden
                  accept="img/*"
                  onChange={(e) => encodeFileToBase64(e.target.files[0])}
                />
                <VideocamIcon style={{ color: "red" }} />
                &nbsp;&nbsp;<h3>Video</h3>
              </ButtonBase>
            </div>

            <div className="messageSender__option">
              <ButtonBase variant="contained" component="label">
                <InsertEmoticonIcon style={{ color: "orange" }} />
                &nbsp;&nbsp;<h3>Save</h3>
              </ButtonBase>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FeedModalContents;
