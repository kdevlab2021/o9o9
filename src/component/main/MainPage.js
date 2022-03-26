import React from "react";
import "./MainPage.css";
import Feed from "./Feed";
import Header from "./Header";

import Profile from "./Profile";
// {/* lowcase a to place h1 in centre, Capital A to align left */}

function MianPage() {
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
          <Feed />
        </div>
      </>
    </div>
  );
}

export default MianPage;
