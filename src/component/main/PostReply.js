import { Avatar, Box } from "@material-ui/core";
import { VerticalAlignCenter } from "@material-ui/icons";
import { Delete } from "@mui/icons-material";
import React from "react";

const PostReply = ({ writer, contents }) => {
  console.log(writer, contents);
  return (
    <>
      <Box
        sx={{
          float: "left",
          width: "450px",
          border: "solid #e9e9e9 1px",
          backgroundColor: "#e9e9e9",
          margin: "0px 0px 10px 0px",
          padding: "6px",
          borderRadius: "10px",
        }}
      >
        {writer} : {contents}
      </Box>
      <Delete style={{ float: "right" }} />
    </>
  );
};

export default PostReply;
