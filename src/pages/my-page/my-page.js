import MyPageSearch from "./components/my-page-search.vue";
import MyPageBar from "./components/my-page-bar.vue";
import MyPageCardnews from "./components/my-page-cardnews.vue";
import MyPageLogo from "./components/my-page-user-list.vue";

export default {
  components: {
    MyPageSearch,
    MyPageBar,
    MyPageLogo,
    MyPageCardnews,
  },

  data() {
    return {
      UserMyPage: [
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
      ],
      mypages: [
        [
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
        ],
        [
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
        ],
      ],
    };
  },
};
