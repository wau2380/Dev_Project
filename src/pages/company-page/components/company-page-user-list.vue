<template>
<div class="wrap_company_nav_container">
  <div class="company_nav_container">
    <div class="company_nav_title">
      <p class="title_text">구독기업</p>        
    </div>
    <div class="company_nav_list">
      <button class="prev_button" v-on:click="moveBar">이전</button>
      <nav id="company_list_bar">
        <ul class="companys">
          <li v-for="(company, i) in UserCompanys" v-bind:key="i">
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
    UserCompanys: Object,
  },
  methods: {
    moveBar(event) {
      let btnClass = event.target.className;
      let nextButton = "next_button";
      let companys = document.querySelector(".companys");

      if (btnClass === nextButton) {
        companys.scrollBy(210, 0);
        // 105당 한칸
      } else {
        companys.scrollBy(-210, 0);
      }
    },
  },
};
</script>
<style>

.wrap_company_nav_container {
  background-color: white;
  width: 100%;
  height: 120px;

  position: fixed;
  top: 70px;
  z-index: 1000;
  transition-duration: 0.5s;
}
.nav_none {
  top: 0px;
}
.company_nav_container {
  display: flex;
  align-items: center;
  
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
.company_nav_container .company_nav_title {
  display: flex;
  height: 100%;
  align-items: center;
}
.company_nav_container .company_nav_title .title_text {
  padding: 0 50px;
  font-size: 1.1em;
  font-weight: bold;
}
.company_nav_container .company_nav_list {
  display: flex;
  height: 100%;
  align-items: center;
  max-width: 80%;
  margin-right: 100px;
}
.company_nav_container .company_nav_list::-webkit-scrollbar {
  display: none;
}
.company_nav_container .company_nav_list button {
  padding: 0;
  height: 30px;
  min-width: 30px;
  margin: 20px;

  border: 1px solid black;
}
#company_list_bar {
  display: flex;
  max-width: 83%;
  height: 100%;
  margin: 5px;
}
#company_list_bar .companys {
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
#company_list_bar .companys::-webkit-scrollbar {
  display: none;
}
#company_list_bar li {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
  margin: 10px;
}
#company_list_bar li img {
  width: 85px;
  height: 85px;
  border: 1px solid;

  border-radius: 75px;
}
</style>
