<template>
  <div class="user_mypage_container">
    <p class="title">구독한 기업</p>
    <div class="user_mypage_list">
      <button class="prev_button" v-on:click="moveBar">이전</button>
      <nav id="mypage_list_bar">
        <ul class="mypages">
          <li v-for="(mypage, i) in UserMyPage" v-bind:key="i">
            <img :src="mypage.logo" alt="" />
          </li>
        </ul>
      </nav>
      <button class="next_button" v-on:click="moveBar">다음</button>
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
.user_mypage_container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid black;
}
.user_mypage_container .title {
  width: 10%;
  padding-left: 10%;
  font-size: 18px;
  font-weight: bold;
}
.user_mypage_list {
  display: flex;
  align-items: center;
  max-width: 60%;
}
.user_mypage_list button {
  padding: 0;
  height: 30px;
  min-width: 40px;
  border: 1px solid black;
}
#mypage_list_bar {
  display: flex;
  width: 100%;
  margin: 5px;
}
#mypage_list_bar .mypages {
  height: 100px;
  background: white;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid var(--border-line-gary);
  border-radius: 20px;
  padding: 0 8px;
  position: relative;
  overflow: scroll;
  overflow-y: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#mypage_list_bar .mypages::-webkit-scrollbar {
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
