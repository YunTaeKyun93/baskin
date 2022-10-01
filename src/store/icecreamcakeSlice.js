import { createSlice } from '@reduxjs/toolkit';

let initialState = [
  {
    id: 0,
    name: "짱구가 좋아하는 외계인의 바나나킥 케이크",
    hash: ["몬스터볼", "엄마는외계인",'슈팅스타'],
    img: 'http://www.baskinrobbins.co.kr/upload/product/1641522153.png',
    comment:"귀여운 짱구와 달콤한 바나나킥, 엄마는 외계인 초코볼을 더해 맛은 물론, 귀여운 디자인까지 잡은 실속만점 케이크",
    icecream:['아몬드 봉봉','엄마는 외계인']
    
  },
  {
    id: 1,
    name: "내가 아인슈페너?! 케이크",
    hash: ["아인슈페너", "초콜릿"],
    mg: 'http://www.baskinrobbins.co.kr/upload/product/1714977259.png',
    comment:'부드러움과 깊고 진한 맛의 아인슈페너 커피를 클래식한 디자인으로 재해석한 케이크',
    icecream :['내가 아인슈페너?!','아몬드 봉봉','엄마는 외계인']

  },
  {
    id: 2,
    name: "복닥복닥 닥트리오",
    hash: ["포켓몬", "닥트리오"],
    img: 'http://www.baskinrobbins.co.kr/upload/product/1714977259.png',
    comment:'포켓몬의 매력만점 닥트리오 캐릭터를 클레이로 표현한 디테일이 살아 있는 미니 케이크',
    icecream:[]
  },

  {
    id: 3,
    name: "포켓몬 친구들과 산으로 바다로",
    hash: ["메론", "메롱멜론"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1641651096.png',
    comment:'바다와 산 배경을 앞/뒤 다르게 하여 반전 매력이 있는 제품으로 포켓몬의 다양한 캐릭터를 만날 수 있는 케이크',
    icecream:[]
  },
  {
    id: 4,
    name: "팽도리와 함께 퍼즐을",
    hash: ["포켓몬","케이크"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1662455434.png',
    comment:'인기 캐릭터 팽도리를 그대로 형상화한 포켓몬 매니아들을 위한 케이크',
    icecream:['이상한 나라의 솜사탕']
  },
  {
    id: 5,
    name: "마음을 드려요",
    hash: ["꽃", "감사"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1709606911.png'
  },
  {
    id: 6,
    name: "반전 매력 춘식이",
    hash: ["춘식이", "반전매력"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1709606890.png'
  },
  {
    id: 7,
    name: "피카피카 피카츄 케이크",
    hash: ["포켓몬", "망고"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1714978293.png'
  },
  {
    id: 8,
    name: "수줍은 러브베어",
    hash: ["생크림","딸기"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1714979425.png'
  },
  {
    id: 9,
    name: "미니 해피 버스데이 케이크",
    hash: ["해피버스데이","미니"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1704332440.png'
  },
  {
    id: 10,
    name: "트웡클 잔망 루피",
    hash: ['루피'],
    img:'http://www.baskinrobbins.co.kr/upload/product/1714977808.png'
  },
  {
    id: 11,
    name: "배라에 찾아 온 뚱랑이",
    hash: ["뚱랑이", "호랑이"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1693530857.png'
  },
  {
    id: 12,
    name: "엄마는 외계인 케이크",
    hash: ["엄마는외계인","초코볼"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1682909522.png'
  },
  {
    id: 13,
    name: "엄마는 인어공주와 바닷속 친구들",
    hash: ["디즈니",'엄마는외계인'],
    img:'http://www.baskinrobbins.co.kr/upload/product/1707271947.png'
  },
  {
    id: 14,
    name: "와르르 톡톡 미니 볼",
    hash: ["초코볼","구슬아이스크림"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1648773875.png'
  },
  {
    id: 15,
    name: "골라먹는 스노우 볼",
    hash: ["스노우볼",'파티케이크'],
    img:'http://www.baskinrobbins.co.kr/upload/product/1682907272.png'
  },
  {
    id: 16,
    name: "듀얼 와츄원 NO.9",
    hash: ["엄마는외계인", "아몬드봉봉","쿠키앤크림","초콜릿무스","베리베리스트로베리"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1623300346.png'
  },
  {
    id: 17,
    name: "골라먹는 와츄원",
    hash: ["엄마는외계인", "아몬드봉봉","체리쥬빌레","슈팅스타"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1667973001.png'
  },
  {
    id: 18,
    name: "리얼 27큐브",
    hash: ["큐브", "아몬드봉봉","체리쥬빌레","슈팅스타"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1648802208.png'
  },
  {
    id: 19,
    name: "스마일 스노우 블러섬",
    hash: ["쿠키앤크림", "엄마는외계인","슈팅스타","레인보우샤베트","베리베리스트로베리"],
    img:'http://www.baskinrobbins.co.kr/upload/product/1688812388.png'
  },
]

let iceCreamCakeData = createSlice({
  name:'iceCreamCakeData',
  initialState,
})

export default iceCreamCakeData;