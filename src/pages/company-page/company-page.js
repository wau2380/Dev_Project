import CompanyPageHeader from "./components/company-page-header.vue";
import CompanyPageUserList from "./components/company-page-user-list.vue";
import CompanyPageTotalList from "./components/company-page-total-list.vue";

export default {
  name: "Company",
  components: {
    CompanyPageHeader,
    CompanyPageUserList,
    CompanyPageTotalList,
  },
  methods: {
    scrollEvents() {
      const headerState = this.headerState;
      this.headerScrollEvent(headerState);
      this.navScrollEvent();
    },
    headerScrollEvent(headerState) {
      // 현재 스크롤 탑
      const beforeScrollTop = this.currentScrollValue;
      // 스크롤 후의 탑
      const afterScrollValue = document.documentElement.scrollTop;
      // page의 헤더
      const pageHeader = document.querySelector('.row1');

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
      // 현재 스크롤 탑
      const beforeScrollTop = this.currentScrollValue;
      // 스크롤 후의 탑
      const afterScrollValue = document.documentElement.scrollTop;
      // page의 nav
      const pageNav = document.querySelector('.wrap_company_nav_container');

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
  // 컴포넌트 인스턴스가 마운트 된 후 호출된다.
  mounted() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.scrollEvents);
  },
  // 컴포넌트 인스턴스가 마운트 해체된후 호출된다.
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  },
  data() {
    return {
      currentScrollValue: 0,
      headerState: true,
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
