import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Feed from "./Feed";
import Header from "./Header";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
// {/* lowcase a to place h1 in centre, Capital A to align left */}

function MianPage() {
  const params = useParams();
  useEffect(() => {
    console.log("MianPage", params.keyword);
  }, [params.keyword]);

  // const [{ user }, dispatch] = useStateValue();

  // const user = null; // null to login page, string to show fb
  return (
    // ? BEM naming convention
    <div className="app">
      {/* <Login /> */}
      {/* {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )} */}
      <>
        <Header />

        <div className="app__body">
          <Profile />
          {params.keyword === undefined ? (
            <Feed keyword={""} />
          ) : (
            <Feed keyword={params.keyword} />
          )}
        </div>
      </>
    </div>
  );
}

export default MianPage;
