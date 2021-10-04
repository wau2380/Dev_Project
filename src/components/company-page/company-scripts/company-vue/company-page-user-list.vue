<template>
  <div class="user_company_container">
    <p class="title">구독기업</p>
    <div class="user_company_list">
      <button class="prev_button" v-on:click="moveBar">이전</button>
      <nav id="company_list_bar">
        <ul class="companys">
          <li v-for="( company, i ) in UserCompanys" v-bind:key="i">
            <img :src="company.logo" alt="">
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
    'UserCompanys': Object
  },
  methods: {
    moveBar(event) {
      let btnClass = event.target.className;
      let nextButton = "next_button";
      let companys = document.querySelector('.companys');
      
      if (btnClass === nextButton) {
        companys.scrollBy(210, 0);
        // 105당 한칸
      } else {
        companys.scrollBy(-210, 0);
      }
    }
  }
}
</script>
<style>
  
.user_company_container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid black;
}
.user_company_container .title {
  width: 10%;
  padding-left: 10%;

  font-size: 20px;
  font-weight: bold;
}
.user_company_list {
  display: flex;
  justify-content: center; 
  align-items: center;

  max-width: 60%;
}
.user_company_list button {
  padding: 0;
  height: 30px;
  min-width: 40px;

  border: 1px solid black;
}
#company_list_bar {
  display: flex;
  width: 100%;
  margin: 5px;
}
#company_list_bar .companys {
  height: 100px;
  background: white;
  background-color: gray;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid var(--border-line-gary);
  border: 1px solid black;
  border-radius: 20px;

  padding: 0 8px;
  position: relative;

  overflow: scroll;
  overflow-y: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
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
  
  border-radius: 20px;
}
</style>