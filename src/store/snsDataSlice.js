import { createSlice } from "@reduxjs/toolkit";

let dataSns = createSlice({
    name: "snsData",
    initialState: [
      {
        id: 0,
        name: "Facebook",
        url: "https://www.facebook.com/baskinrobbinskr/",
        icon: "http://www.baskinrobbins.co.kr/assets/images/main/sns_facebook.png",
        headerIcon:
          "http://www.baskinrobbins.co.kr/assets/images/common/icon_facebook.png"
      },
      {
        id: 1,
        name: "Twitter",
        url: "https://twitter.com/BaskinrobbinsKR",
        icon: "http://www.baskinrobbins.co.kr/assets/images/main/sns_twitter.png",
        headerIcon:
          "http://www.baskinrobbins.co.kr/assets/images/common/icon_twitter.png"
      },
      {
        id: 2,
        name: "Blog",
        url: "https://blog.naver.com/brgirl31",
        icon: "http://www.baskinrobbins.co.kr/assets/images/main/sns_blog.png",
        headerIcon:
          "http://www.baskinrobbins.co.kr/assets/images/common/icon_blog.png"
      },
      {
        id: 3,
        name: "Instagram",
        url: "https://www.instagram.com/baskinrobbinskorea/",
        icon: "http://www.baskinrobbins.co.kr/assets/images/main/sns_instagram.png",
        headerIcon:
          "http://www.baskinrobbins.co.kr/assets/images/common/icon_instgram.png"
      },
      {
        id: 4,
        name: "Youtube",
        url: "https://www.youtube.com/user/baskinrobbinskorea",
        icon: "http://www.baskinrobbins.co.kr/assets/images/main/sns_youtube.png",
        headerIcon:
          "http://www.baskinrobbins.co.kr/assets/images/common/icon_youtube.png"
      }
    ]
  });

  export default dataSns;