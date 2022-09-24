import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: 0,
    name: "포켓몬 더블 쿠키 샌드",
    hash: ["쿠키샌드", "초콜릿"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720173641.png"
  },
  {
    id: 1,
    name: "파이리 스틱바 오렌지 & 라즈베리",
    hash: ["파이리", "스틱바"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720174518.png"
  },
  {
    id: 2,
    name: "피카츄 스틱바 바나나 커스터드",
    hash: ["피카츄", "스틱바"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720174052.png"
  },
  {
    id: 3,
    name: "맥심 스틱바 모카골드 마일드",
    hash: ["맥심", "스틱바"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720173998.png"
  },
  {
    id: 4,
    name: "맥심 스틱바 화이트골드",
    hash: ["맥심", "스틱바"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720173960.png"
  },
  {
    id: 5,
    name: "고라파덕 아이스크림 콘",
    hash: ["바닐라", "초코리본"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1714823282.png"
  },
  {
    id: 6,
    name: "푸린 아이스크림 콘",
    hash: ["딸기", "팝핑캔디"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1714823655.png"
  },
  {
    id: 7,
    name: "아이스 초코파이 초코마시멜로",
    hash: ["초코파이", "마시멜로"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1704333214.png"
  },
  {
    id: 8,
    name: "아이스 초코파이 민트 초코칩",
    hash: ["민트", "초코파이"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720004247.png"
  },
  {
    id: 9,
    name: "소금우유 아이스 모찌",
    hash: ["소금우유", "모찌"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1680427780.png"
  },
  {
    id: 10,
    name: "아이스크림 콘푸로스트",
    hash: ["콘푸로스트", "콘"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1654048606.png"
  },
  {
    id: 11,
    name: "제주 감귤 아이스 모찌",
    hash: ["제주감귤아이스모찌"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1680657735.png"
  },
  {
    id: 12,
    name: "오레오 킹 아이스 샌드 밀크쿠키",
    hash: ["오레오쿠키", "밀크쿠키", "아이스샌드"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1619855890.png"
  },
  {
    id: 13,
    name: "오레오 킹 아이스 샌드 민트 초코칩",
    hash: ["아이스킹오레오샌드민트초코칩"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1677978425.png"
  },
  {
    id: 14,
    name: "아이스 호떡(모찌)",
    hash: ["아이스호떡"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1646370698.png"
  },
  {
    id: 15,
    name: "아빵 우유",
    hash: ["아빵우유"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1619855710.png"
  },
  {
    id: 16,
    name: "아이스 모찌 바나나킥",
    hash: ["아이스모찌바나나킥"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1619855710.png"
  },
  {
    id: 17,
    name: "아이스 모찌 크림치즈",
    hash: ["아이스모찌", "크림치즈"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1619855833.png"
  },
  {
    id: 18,
    name: "아이스크림 스틱바 초코그린티",
    hash: ["아이스크림바", "초코그린티", "초콜릿", "그린티"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1619855920.png"
  },
  {
    id: 19,
    name: "아이스크림 스틱바 민트쿠앤크",
    hash: ["아이스크림스틱바", "민트쿠앤크", "민트쿠키", "쿠키앤크림"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1619855907.png"
  }
];
let dessertData = createSlice({
    name:'dessertData',
    initialState,
  })
  
  export default dessertData;