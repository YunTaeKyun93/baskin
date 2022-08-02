import { createSlice } from "@reduxjs/toolkit";
import image0 from "./IcecreamImg/image0.jpg";
import image1 from "./IcecreamImg/image1.jpg";
import image2 from "./IcecreamImg/image2.jpg";
import image3 from "./IcecreamImg/image3.jpg";
import image4 from "./IcecreamImg/image4.jpg";
import image5 from "./IcecreamImg/image5.jpg";
import image6 from "./IcecreamImg/image6.jpg";
import image7 from "./IcecreamImg/image7.jpg";
import image8 from "./IcecreamImg/image8.jpg";
import image9 from "./IcecreamImg/image9.jpg";
import image10 from "./IcecreamImg/image10.jpg";
import image11 from "./IcecreamImg/image11.jpg";
import image12 from "./IcecreamImg/image12.jpg";
import image13 from "./IcecreamImg/image13.jpg";
import image14 from "./IcecreamImg/image14.jpg";
import image15 from "./IcecreamImg/image15.jpg";
import image16 from "./IcecreamImg/image16.jpg";
import image17 from "./IcecreamImg/image17.jpg";
import image18 from "./IcecreamImg/image18.jpg";
import image19 from "./IcecreamImg/image19.jpg";

let iceCreamData = createSlice({
  name: "iceCreamData",
  initialState: [
    {
      id: 0,
      name: "마우나로아 마카다미아",
      hash: ["마우라노아", "마카다미아", "카라멜"],
      image: image0
    },
    {
      id: 1,
      name: "너로정했다! 이브이",
      hash: ["이브이", "초콜릿"],
      image: image1
    },
    {
      id: 2,
      name: "피카피카 피카츄",
      hash: ["바나나", "커스터드크림"],
      image: image2
    },
    {
      id: 3,
      name: "나와라 꼬부기",
      hash: ["꼬부기", "소다"],
      image: image3
    },
    {
      id: 4,
      name: "메롱멜론",
      hash: ["멜론"],
      image: image4
    },
    {
      id: 5,
      name: "도리도리 팽도리",
      hash: ["밀크", "소다"],
      image: image5
    },
    {
      id: 6,
      name: "치코치코 치코리타",
      hash: ["청사과", "요거트", "샤베트"],
      image: image6
    },
    {
      id: 7,
      name: "체리쥬빌레",
      hash: ["체리", "체리쥬빌레"],
      image: image7
    },
    {
      id: 8,
      name: "오레오 쿠키 앤 크림",
      hash: ["오레오쿠키앤크림"],
      image: image8
    },
    {
      id: 9,
      name: "레인보우 샤베트",
      hash: ["파인애플", "오렌지", "라즈베리", "샤베트", "레인보우샤베트"],
      image: image9
    },
    {
      id: 10,
      name: "오레오 쿠키 앤 민트",
      hash: ["오레오쿠키앤민트", "민트아이스크림", "오레오쿠키", "초콜릿리본"],
      image: image10
    },
    {
      id: 11,
      name: "블랙 소르베",
      hash: ["블랙소르베", "레몬라임소르베"],
      image: image11
    },
    {
      id: 12,
      name: "알폰소 망고",
      hash: ["망고"],
      image: image12
    },
    {
      id: 13,
      name: "엄마는 외계인",
      hash: ["초콜릿", "초코볼", "엄마는외계인"],
      image: image13
    },
    {
      id: 14,
      name: "쫀떡궁합",
      hash: ["쫀떡", "인절미", "흑임자", "찹쌀떡"],
      image: image14
    },
    {
      id: 15,
      name: "아몬드 봉봉",
      hash: ["아몬드", "초콜릿", "초코", "아몬드봉봉"],
      image: image15
    },
    {
      id: 16,
      name: "민트 초콜릿 칩",
      hash: ["민트", "초콜릿칩", "민트초콜릿칩"],
      image: image16
    },
    {
      id: 17,
      name: "사랑에 빠진 딸기",
      hash: ["사바딸", "사랑에빠진딸기", "크런치초콜릿", "치즈케이크"],
      image: image17
    },
    {
      id: 18,
      name: "애플 민트",
      hash: ["애플민트", "사과", "민트", "샤베트"],
      image: image18
    },
    {
      id: 19,
      name: "뉴욕 치즈케이크",
      hash: ["치즈", "치즈케이크"],
      image: image19
    }
  ]
});

export default iceCreamData;
