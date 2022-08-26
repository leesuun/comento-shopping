interface productItemsType {
  [category: string]: {
    [items: string]: { name: string; description: string; thumbnail: string }[];
  };
}

export const productItems: productItemsType = {
  cup: {
    items: [
      {
        name: "비숑 블랙 머그잔",
        description:
          "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.",
        thumbnail:
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg",
      },
      {
        name: "가열 보온 티코스터 온열 원터치 컵 받침대",
        description:
          "언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.",
        thumbnail:
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg",
      },
      {
        name: "벨루즈까사 솜사탕 파스텔 머그 4종 세트",
        description:
          "솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그.",
        thumbnail:
          "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg",
      },
    ],
  },
  winter: {
    items: [
      {
        name: "해피데이 따뜻해 포켓용 핫팩 100g",
        description:
          "다른 제품에 비해 열이 훨씬많이나며, 주머니에 넣어두면 10분 정도 후 자연히 열이 발생합니다.",
        thumbnail:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtmB5FH4ZZ7bj4TEvEiB3FjwAt3w7l-BkKFScyIJoezaQvodYAe0NqSHZsXZc4d27IAFKembC-M8c&usqp=CAc",
      },
      {
        name: "겟룩 겨울 방한 장갑",
        description:
          "내구성이 높은 고밀도 원단을 사용하여 날카로운 사물에 의해 쉽게 찢어지지 않습니다.",
        thumbnail:
          "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/488576637924538-3dbb0246-65ed-41e1-aee5-28d58b3824d8.jpg",
      },
      {
        name: "발렌티노크리스티 면95% 바닥 도톰한 이중 쿠션 스포츠양말 중목 6켤레",
        description:
          "흘러내림 방지를 위해 발목 전체 탄력있는 서포트 밴딩처리로 오랜시간 안정감있는 착용 가능!",
        thumbnail:
          "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c302/520d6ce63215d83656d7173af1c7dbd4eac31ace4b196ad297cd9413a990.jpg",
      },
    ],
  },
};
