import LoginPageHeader from "./components/login-page-header.vue";
import LoginPageCardnews from "./components/login-page-card-news.vue";
import LoginPageSignin from "./components/login-page-signin";




export default {
  name: "Login",
  components: {
    LoginPageHeader,
    LoginPageCardnews,
    LoginPageSignin,
  },
  data() {
    return {
      currentScrollValue: 0,
      headerState: false,
    }
  },
  methods: {
    scrollEvents() {
      const headerState = this.headerState;
      this.headerScrollEvent(headerState);
    },
    headerScrollEvent(headerState) {
      // 현재 스크롤 탑
      const beforeScrollTop = this.currentScrollValue;
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
};
