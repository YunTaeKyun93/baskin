import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./css/snsMenu.module.css";
const ss = classNames.bind(styles);

const SnsMenu = () => {
  const [favorite, setFavorite] = useState(false);

  const linkCopy = () => {
    var url = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.");
  };
  const copyUrl = () => {
    var url = window.document.location.href;
    alert(`주소를 복사해서 사용해주세요
    ${url}`);
  };
  const openFacePop = () => {
    var popup = window.open(
      "https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.baskinrobbins.co.kr",
      "페북공유",
      "width=700px,height=800px,scrollbars=yes"
    );
  };
  const openTwitPop = () => {
    var popup = window.open(
      "https://twitter.com/intent/tweet?text=%5B%EB%B0%B0%EC%8A%A4%ED%82%A8%EB%9D%BC%EB%B9%88%EC%8A%A4%5D%20%EB%82%B4%EA%B0%80%20%EC%95%84%EC%9D%B8%EC%8A%88%ED%8E%98%EB%84%88%3F!%0A%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C%20%EC%BB%A4%ED%94%BC%20%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%2C%20%EC%9A%B0%EC%9C%A0%20%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EC%97%90%20%EB%8B%AC%EC%BD%A4%ED%95%9C%20%ED%94%84%EB%A0%88%EC%B2%BC%20%EB%B3%BC%2C%20%EC%B4%88%EC%BD%9C%EB%A6%BF%20%EB%A6%AC%EB%B3%B8%EC%9D%B4%20%EC%96%B4%EC%9A%B0%EB%9F%AC%EC%A7%84%20%EB%A7%9B%0A&url=http%3A%2F%2Fwww.baskinrobbins.co.kr%2Fmenu%2Fview.php%3Fseq%3D9311",
      "트윗공유",
      "width=700px,height=800px,scrollbars=yes"
    );
  };

  return (
    <div>
      <ul className={ss("snsMenu")}>
        <li
          onMouseEnter={() => setFavorite(true)}
          onMouseLeave={() => setFavorite(false)}
        >
          {favorite == true ? (
            <img src="http://www.baskinrobbins.co.kr/assets/images/common/ico_favorite_on.png" />
          ) : (
            <img src="http://www.baskinrobbins.co.kr/assets/images/common/ico_favorite.png" />
          )}
        </li>
        <li>
          <a onClick={() => openFacePop()} target="_blank">
            <img src="http://www.baskinrobbins.co.kr/assets/images/common/icon_facebook.png" />
          </a>
        </li>

        <li>
          <a onClick={() => openTwitPop()} target="_blank">
            <img src="http://www.baskinrobbins.co.kr/assets/images/common/icon_twitter.png" />
          </a>
        </li>
        <li onClick={() => linkCopy()}>
          <img src="http://www.baskinrobbins.co.kr/assets/images/common/icon_copy.png" />
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default SnsMenu;
