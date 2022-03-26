import React, { Fragment, useCallback, useEffect, useState } from "react";
import "./Feed.css";
import FeedWrite from "./FeedPopupButton";
import StoryReal from "./StoryReal";
// import MessageSender from "./MessageSender";
import Post from "./Post";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { SettingsRemoteSharp } from "@material-ui/icons";
import FeedPopupButton from "./FeedPopupButton";

function createBulkPosts() {
  const array = [];
  for (let i = 0; i < 2; i++) {
    array.push({
      id: i,
      profilePic:
        "https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png",
      message: "WOW this works! ",
      timestamp: "2022-03-25",
      username: "emilyoun",
      image:
        "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
    });
  }
  return array;
}

function Feed() {
  const [posts, setPosts] = useState(createBulkPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  // 서버 통신 부분
  // const getPosts = useCallback(async () => {
  //   setLoading(true);

  // await axios.get(`localhost:9090/post/list/${page}`).then((res) => {
  //   setPosts((prevState) => [...prevState, res]);
  // });
  //   setLoading(false);
  // }, [page]);

  // 테스트용
  const getPosts = useCallback(async () => {
    setLoading(true);
    setPosts((prevState) => [...prevState, ...createBulkPosts()]);
    setLoading(false);
  }, [page]);

  // posts 가 바뀔때마다 함수 실행
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면,
  useEffect(() => {
    console.log(1, inView, loading, 2);
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  //! realtime connection
  //useEffect(() => {
  // db.collection("posts")
  //   .orderBy("timestamp", "desc")
  //   .onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  //   );
  //}, []);

  return (
    <div className="feed">
      <FeedPopupButton />
      {posts.map(({ profilePic, message, timestamp, username, image }, idx) => (
        <Fragment key={idx}>
          {posts.length - 1 === idx ? (
            <div ref={ref}>
              <Post
                profilePic={profilePic}
                message={message}
                timestamp={timestamp}
                username={username}
                image={image}
              />
            </div>
          ) : (
            <Post
              profilePic={profilePic}
              message={message}
              timestamp={timestamp}
              username={username}
              image={image}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Feed;
