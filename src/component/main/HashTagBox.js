import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./FeedPopupButton.css";

const HashTagBox = ({ keyword }) => {
  return (
    <Card
      sx={{
        marginTop: "30px",
        marginBottom: "-15px",
        display: "flex",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151, float: "right" }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOjQHIpy-9kUbSHG3O9jklA162i0jMDObqN2h6S2IGny9NPdQqjHw3Pyh6g3tiTsqOBM&usqp=CAU"
          alt="Live from space album cover"
        />
        <CardContent>
          <Typography component="div" variant="h3">
            {keyword}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            #hashtag#o9o9
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HashTagBox;
