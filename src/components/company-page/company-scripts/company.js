import CompanyPageBar from './company-vue/company-page-bar.vue'
import CompanyPageSearch from './company-vue/company-page-search.vue'
import CompanyPageUserList from './company-vue/company-page-user-list.vue'
import CompanyPageTotalList from './company-vue/company-page-total-list.vue'

export default {
  components: {
    CompanyPageSearch,
    CompanyPageBar,
    CompanyPageUserList,
    CompanyPageTotalList,
  },
  data() {
    return {
      UserCompanys: [
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
      ],
      companys: [
        [
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        ],
        [
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        ],
      ]
    }
  },
}