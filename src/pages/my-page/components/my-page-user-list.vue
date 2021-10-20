<template>
<div class="wrap_mypage_nav_container">
  <div class="mypage_nav_container">
    <div class="mypage_nav_title">
      <p class="title_text">구독기업</p>        
    </div>
    <div class="mypage_nav_list">
      <button class="prev_button" v-on:click="moveBar">이전</button>
      <nav id="mypage_list_bar">
        <ul class="companys">
          <li v-for="(company, i) in UserMyPage" v-bind:key="i">
            <img :src="company.logo" alt="" />
          </li>
        </ul>
      </nav>
      <button class="next_button" v-on:click="moveBar">다음</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    UserMyPage: Object,
  },
  methods: {
    moveBar(event) {
      let btnClass = event.target.className;
      let nextButton = "next_button";
      let mypages = document.querySelector(".mypages");
      if (btnClass === nextButton) {
        mypages.scrollBy(210, 0);
        // 105당 한칸
      } else {
        mypages.scrollBy(-210, 0);
      }
    },
  },
};
</script>
<style>

.wrap_mypage_nav_container {
  background-color: white;
  width: 100%;
  height: 120px;

  position: fixed;
  top: 70px;
  z-index: 1000;
}
.mypage_nav_container {
  display: flex;
  align-items: center;
  
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
.mypage_nav_container .mypage_nav_title {
  display: flex;
  height: 100%;
  align-items: center;
}
.mypage_nav_container .mypage_nav_title .title_text {
  padding: 0 50px;
  font-size: 1.1em;
  font-weight: bold;
}
.mypage_nav_container .mypage_nav_list {
  display: flex;
  height: 100%;
  align-items: center;
  max-width: 80%;
  margin-right: 100px;
}
.mypage_nav_container .mypage_nav_list::-webkit-scrollbar {
  display: none;
}
.mypage_nav_container .mypage_nav_list button {
  padding: 0;
  height: 30px;
  min-width: 30px;
  margin: 20px;

  border: 1px solid black;
}
#mypage_list_bar {
  display: flex;
  max-width: 83%;
  height: 100%;
  margin: 5px;
}
#mypage_list_bar .companys {
  background-color: white;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  border: 1px solid var(--border-line-gary);
  border-radius: 20px;
  margin: 0;
  padding: 0 8px;
  position: relative;

  overflow: scroll;
}
#mypage_list_bar .companys::-webkit-scrollbar {
  display: none;
}
#mypage_list_bar li {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
  margin: 10px;
}
#mypage_list_bar li img {
  width: 85px;
  height: 85px;
  border: 1px solid;

  border-radius: 75px;
}
</style>
