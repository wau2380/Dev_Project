import MyPageHeader from "./components/my-page-header.vue";
import MyPageCardnews from "./components/my-page-cardnews.vue";
import MyPageLogo from "./components/my-page-user-list.vue";

export default {
  name: "MyPage",
  components: {
    MyPageHeader,
    MyPageLogo,
    MyPageCardnews,
  },
  methods: {
    scrollEvents() {
      console.log("asd");
      const headerState = this.headerState;
      this.headerScrollEvent(headerState);
      this.navScrollEvent();
    },
    headerScrollEvent(headerState) {
      // 현재 스크롤 탑
      const beforeScrollTop = this.currentScrollValue;
      const afterScrollValue = document.documentElement.scrollTop;
      // page의 헤더
      const pageHeader = document.querySelector('.row1');
      console.log('asd');

      // 추후에 nav가 생기더라도 수정해줄 필요가 없다.
      if (headerState) {
        if (afterScrollValue > beforeScrollTop) {
          pageHeader.classList.add('header_none');
          this.currentScrollValue = beforeScrollTop;
          return
        } else {
          pageHeader.classList.remove('header_none');
          this.currentScrollValue = beforeScrollTop;
          return
        }
      } else {
        if (afterScrollValue > beforeScrollTop) {
          pageHeader.classList.add('header_none');
          this.currentScrollValue = afterScrollValue;
          return
        } else {
          pageHeader.classList.remove('header_none');
          this.currentScrollValue = afterScrollValue;
          return
        }
      }
    },
    navScrollEvent() {
      // scroll bar의 최상단의 값
      const beforeScrollTop = this.currentScrollValue;
      const afterScrollValue = document.documentElement.scrollTop;
      // page의 nav
      const pageNav = document.querySelector('.wrap_mypage_nav_container');

      if (afterScrollValue > beforeScrollTop) {
        pageNav.classList.add('nav_none');
        this.currentScrollValue = afterScrollValue;
        return
      }
      else {
        pageNav.classList.remove('nav_none');
        this.currentScrollValue = afterScrollValue;
        return 
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.scrollEvents);
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  },
  data() {
    return {
      currentScrollValue: 0,
      headerState: true,
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
