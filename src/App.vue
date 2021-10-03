<template>
  <!-- <login_page /> -->
  <!-- <main_page/> -->
  <join_page />
</template>

<script>
// import main_page from "./components/main_page/main_page.vue";

// import login_page from "./components/login_page/login_page.vue";
import join_page from "./components/join_page/join_page.vue";

export default {
  name: "App",
  components: {
    join_page,
    // main_page,
    // login_page,
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
