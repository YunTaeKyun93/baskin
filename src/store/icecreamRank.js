import { createSlice } from "@reduxjs/toolkit";
import image0 from "./IcecreamImg/rank1.jpg";
import image1 from "./IcecreamImg/rank2.jpg";
import image2 from "./IcecreamImg/rank3.jpg";
import image3 from "./IcecreamImg/rank4.jpg";
import image4 from "./IcecreamImg/rank5.jpg";
import image5 from "./IcecreamImg/rank6.jpg";
import image6 from "./IcecreamImg/rank7.jpg";
import image7 from "./IcecreamImg/rank8.jpg";
import image8 from "./IcecreamImg/rank9.jpg";
import image9 from "./IcecreamImg/rank10.jpg";


let iceCreamRank = createSlice({
  name: "iceCreamRank",
  initialState: [
    {
      id: 0,
      name: "마우나로아 마카다미아",
      image: image0,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_1.png'
    },
    {
      id: 1,
      name: "엄마는 외계인",
      image: image1,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_2.png'
    },
    {
      id: 2,
      name: "아몬드 봉봉",
      image: image2,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_3.png'
    },
    {
      id: 3,
      name: "민트 초코릿칩",
      image: image3,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    },
    {
      id: 4,
      name: "뉴욕 치즈케이크",
      image: image4,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    },
    {
      id: 5,
      name: "체리쥬빌레",
      image: image5,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    },
    {
      id: 6,
      name: "레인보우 샤베트",
      image: image6,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    },
    {
      id: 7,
      name: "너로정했다 이브이!",
      image: image7,
      mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    },
    // {
    //   id: 8,
    //   name: "메롱 멜론",
    //   image: image8,
    //   mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    // },
    // {
    //   id: 9,
    //   name: "피카피카 피카츄!",
    //   image: image9,
    //   mark:'http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png'
    // },

  ]
});

export default iceCreamRank;
