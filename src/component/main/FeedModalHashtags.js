import "./FeedModalHashtags.css";
import React, { useCallback, useState } from "react";

const FeedModalHashtags = () => {
  // onChange로 관리할 문자열
  const [hashtag, setHashtag] = useState("");
  // 해시태그를 담을 배열
  const [hashArr, setHashArr] = useState([]);

  const onChangeHashtag = (e) => {
    setHashtag(e.target.value);
  };
  const onKeyUp = useCallback(
    (e) => {
      e.preventDefault();
      if (window.event.keyCode === 13) return;

      if (typeof window !== "undefined") {
        /* 요소 불러오기, 만들기*/
        const $HashWrapOuter = document.querySelector(".HashWrapOuter");
        const $HashWrapInner = document.createElement("div");
        $HashWrapInner.className = "HashWrapInner";

        /* 태그를 클릭 이벤트 관련 로직 */
        $HashWrapInner.addEventListener("click", () => {
          $HashWrapOuter?.removeChild($HashWrapInner);
          console.log($HashWrapInner.innerHTML);
          setHashArr(hashArr.filter((hashtag) => hashtag));
        });

        /* enter 키 코드 :13 */
        if (window.event.keyCode === 32 && e.target.value.trim() !== "") {
          //if (e.target.value.trim() !== "") {
          $HashWrapInner.innerHTML = "#" + e.target.value;
          $HashWrapOuter?.appendChild($HashWrapInner);
          setHashArr((hashArr) => [...hashArr, hashtag]);
          setHashtag("");
        }
      }
    },
    [hashtag, hashArr]
  );

  return (
    <div className="hashDivrap">
      <div className="HashWrap">
        <div className="HashWrapOuter"></div>
        <input
          className="HashInput"
          type="text"
          value={hashtag}
          onChange={onChangeHashtag}
          onKeyUp={onKeyUp}
          placeholder="해시태그 입력하고 스페이스 바를 눌러주세요"
        />
      </div>
    </div>
  );
};

export default FeedModalHashtags;
