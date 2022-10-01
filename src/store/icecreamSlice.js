import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "짱구가 좋아하는 외계인의 바나나킥",
    engName: "ALIEN´S BANANA KICK ICE CREAM",
    hash: ["바나나킥", "바나나"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1699512103.png",
    comment:"초콜릿, 바나나, 바나나킥 3가지 맛 아이스크림에 바나나&초콜릿 프레첼볼과 초콜릿 칩이 어우러진 맛"
  },
  {
    id: 1,
    name: "내가 아인슈페너?!",
    engName: "EINSPANNER ICE CREAM",
    hash: ["에스프레소", "우유"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720429622.png",
    comment:
      "에스프레소 커피 아이스크림, 우유 아이스크림에 달콤한 프레체볼, 초콜릿 리본이 어우러진 맛"
  },

  {
    id: 2,
    name: "ㅋㅋㅋ",
    engName: " COFFEE, COCOA, CARAMEL ICE CREAM",
    hash: ["커피", "코코아"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1720430118.png",
    comment: "코코아 아이스크림에 카라멜 리본이 쏘옥"
  },
  {
    id: 3,
    name: "아이스 초당옥수수",
    engName: "SWEET CORN ICE CREAM",
    hash: ["초당옥수수", "치즈아이스크림"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1715073863.png",
    comment:
      "달콤한 초당옥수수 아이스크림과 부드러운 치즈 아이스크림에 바삭바삭 씹을수록 고소한 옥수수 크런치의 조화!"
  },
  {
    id: 4,
    name: "뮤! 넌 내거야",
    engName: "MEW ICE CREAM",
    hash: ["딸기", "딸기우유"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1659945229.png",
    comment: "달콤상큼한 딸기&딸기 우유 아이스크림에 바삭한 크리스피 볼이 쏙쏙!"
  },
  {
    id: 5,
    name: "피카피카 피카츄",
    engName: "PIKACHU ICE CREAM",
    hash: ["바나나", "커스터드크림"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1714821671.png",
    comment:
      "달콤한 바나나 아이스크림에 부드러운 커스터드 크림, 초콜릿 후레이크와 레드 팝핑캔디가 쏙쏙!"
  },
  {
    id: 6,
    name: "비타 500 소르베",
    engName: "VITA 500 SORBET",
    hash: ["비타500", "소르베"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1696731107.png",
    comment: "상큼한 비타민C의 맛! 시원한 소르베로 즐기는 비타 500"
  },
  {
    id: 7,
    name: "체리쥬빌레",
    engName: "CHERRIES JUBILEE",
    hash: ["체리", "체리쥬빌레"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1452062882.png",
    comment: "체리과육이 탱글탱글 씹히는 체리 아이스크림"
  },
  {
    id: 8,
    name: "오레오 쿠키 앤 크림",
    engName: "",
    hash: ["오레오쿠키앤크림"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1638868047.png",
    comment: "부드러운 바닐라향 아이스크림에, 달콤하고 진한 오레오 쿠키가 듬뿍!"
  },
  {
    id: 9,
    engName: "RAINBOW SHERBET",
    name: "레인보우 샤베트",
    hash: ["파인애플", "오렌지", "라즈베리", "샤베트", "레인보우샤베트"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1530778136.png",
    comment: "상큼한 파인애플, 오렌지, 라즈베리 샤베트"
  },
  {
    id: 10,
    name: "이상한 나라의 솜사탕",
    engName: "COTTON CANDY WONDERLAND",
    hash: ["이나솜", "솜사탕"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1646458437.png",
    comment: "부드럽고 달콤한 솜사탕과 함께 떠나는 이상한 나라로의 여행"
  },
  {
    id: 11,
    name: "피나 콜라다",
    engName: "PINA COLADA",
    hash: ["파인애플", "코코넛"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1680839472.png",
    comment: "상큼한 파인애플&코코넛 샤베트에 파인애플이 쏙쏙"
  },
  {
    id: 12,
    name: "알폰소 망고",
    engName: "ALPHONSO MANGO",
    hash: ["망고"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1467791176.png",
    comment: "알폰소 망고와 우유 아이스크림의 부드러운 만남"
  },
  {
    id: 13,
    name: "엄마는 외계인",
    engName: "PUSS IN BOOTS",
    hash: ["초콜릿", "초코볼", "엄마는외계인"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1528197022.png",
    comment:
      "밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림"
  },
  {
    id: 14,
    name: "피스타치오 아몬드",
    engName: "PISTACHIO ALMOND",
    hash: ["피스타치오", "아몬드"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1530775359.png",
    comment: "피스타치오향과 아몬드가 만나 고소함이 두배!"
  },
  {
    id: 15,
    name: "아몬드 봉봉",
    engName: "ALMOND BON BON",
    hash: ["아몬드", "초콜릿", "초코", "아몬드봉봉"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1452062933.png",
    comment: "입안 가득 즐거운 초콜릿, 아몬드로 더욱 달콤하게"
  },
  {
    id: 16,
    name: "민트 초콜릿 칩",
    engName: "MINT CHOCOLATE CHIP",
    hash: ["민트", "초콜릿칩", "민트초콜릿칩"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1648796203.png",
    comment: "쿨한 당신의 선택! 상쾌한 민트향에 초코칩까지!"
  },
  {
    id: 17,
    name: "사랑에 빠진 딸기",
    engName: "LOVE STRUCK STRAWBERRY",
    hash: ["사바딸", "사랑에빠진딸기", "크런치초콜릿", "치즈케이크"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1530779443.png",
    comment: "크런치 초콜릿, 치즈 케이크, 스트로베리가 듬뿍 들어있는 아이스크림"
  },
  {
    id: 18,
    name: "바람과 함께 사라지다",
    engName: "TWINBERRY CHEESECAKE",
    hash: ["블루베리", "딸기"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1530777439.png",
    comment: "블루베리와 딸기로 상큼함을 더한 치즈케이크 한 조각"
  },
  {
    id: 19,
    engName: "NEW YORK CHEESECAKE",
    name: "뉴욕 치즈케이크",
    hash: ["치즈", "치즈케이크"],
    img: "http://www.baskinrobbins.co.kr/upload/product/1530775918.png",
    comment: "부드럽게 즐기는 뉴욕식 정통 치즈케이크 아이스크림"
  }
];
let iceCreamData = createSlice({
  name: "iceCreamData",
  initialState,
  reducers: {}
});

export default iceCreamData;
