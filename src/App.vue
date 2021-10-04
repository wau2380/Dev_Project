<template>
  <!-- <login-page /> -->
  <company-page />
  <!-- <main-page /> -->
  <!-- <join-page /> -->
</template>

<script>
// import MainPage from "./components/main-page/main-page.vue";
import CompanyPage from "./components/company-page/company-page.vue";
// import LoginPage from "./components/login-page/login-page.vue";
// import JoinPage from "./components/join-page/join-page.vue";

export default {
  name: "App",
  components: {
    // JoinPage,
    // MainPage,
    // LoginPage,
    CompanyPage,
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
