import "./App.css";

import * as React from "react";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

import MianPage from "./component/main/MainPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MianPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="feed/hashtag/:keyword" element={<MianPage />} />
        {/* <Route index element={<Main />} />
          <Route path="feed" element={<Feed />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="storyreal" element={<StoryReal />} />
          <Route path="widgets" element={<Widgets />} />
          <Route path="main" element={<Main />} />
          <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
