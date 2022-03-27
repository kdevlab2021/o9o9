import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { ButtonBase } from "@mui/material";
import "./FeedModalContents.css";
import FeedModalHashtags from "./FeedModalHashtags";

const FeedModalContents = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [hashArr, setHashArr] = useState([""]);

  useEffect(() => {
    console.log(hashArr);
  }, [hashArr]);

  // 사진 미리보기
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

      <FeedModalHashtags hashArr={hashArr} setHashArr={setHashArr} />

      <div className="FeedModalContents">
        <div className="FeedModalContents__bottom">
          <div className="FeedModalContents__option">
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

          <div className="FeedModalContents__option">
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

          <div className="FeedModalContents__option">
            <ButtonBase variant="contained" component="label">
              <InsertEmoticonIcon style={{ color: "orange" }} />
              &nbsp;&nbsp;<h3>Save</h3>
            </ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedModalContents;
