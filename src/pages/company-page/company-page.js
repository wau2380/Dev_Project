import CompanyPageBar from "./components/company-page-bar.vue";
import CompanyPageSearch from "./components/company-page-search.vue";
import CompanyPageUserList from "./components/company-page-user-list.vue";
import CompanyPageTotalList from "./components/company-page-total-list.vue";

export default {
  name: "Company",
  components: {
    CompanyPageSearch,
    CompanyPageBar,
    CompanyPageUserList,
    CompanyPageTotalList,
  },
  data() {
    return {
      UserCompanys: [
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
      companys: [
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
