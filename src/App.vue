<template>
  <!-- <main-page /> -->
  <!-- <company-page /> -->
  <!-- <my-page /> -->
  <!-- <login-page /> -->
  <join-page />
</template>

<script>
// import MainPage from "./pages/main-page/main-page.vue";
// import CompanyPage from "./pages/company-page/company-page.vue";
// import MyPage from "./pages/my-page/my-page.vue";
// import LoginPage from "./pages/login-page/login-page.vue";
import JoinPage from "./pages/join-page/join-page.vue";

export default {
  name: "App",
  components: {
    // MainPage,
    // CompanyPage,
    // MyPage,
    // LoginPage,
    JoinPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
