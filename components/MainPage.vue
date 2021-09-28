<template>
  <nav class="breadcrumb">
    <div class="buttons_select_view">
      <button v-bind:class="buttonState[0]" v-on:click="CompanySort">전체 기업</button>
      <button v-bind:class="buttonState[1]" v-on:click="CompanySort">구독 기업</button>
    </div>
    <div class="news_sort_wrapper">
      <select v-model="selected" id="news_sort_selector" v-on:change="CardNewsSort">
        <option value="popular">인기순</option>
        <option value="recent">최신순</option>
      </select>
    </div>
  </nav>
  <!-- <div class="cardnews-wrapper"> 테스트용
    <ul>
      <li v-for="(test, i) in testData" v-bind:key ="test.title + i">
        <subscribe-component :test="test" :index="i"></subscribe-component>
      </li>
    </ul>
  </div> -->
</template>
<script>
// import SubscribeComponent from "./Sections/Subscribe" 
export default {
  components: {
    // SubscribeComponent
  },
  data() {
    return {
      selected: "popular",
      buttonState: ["button is-selected", "button"],
      /* testData: [
         {like: 1, title: "가", date:20200907, save:false},
         {like: 200, title: "나", date:20190907, save:false},
         {like: 10, title: "다", date:20210906, save:true},
       ], */
    }
  },
  methods: {
    CompanySort(event) {
      const eventTarget = event.target.classList;

      if(eventTarget.length === 1) { 
        this.buttonState.reverse();
      }
    },
    /* CardNewsSort() {
      const testData = this.testData;
      const selected = this.selected;
      const POPULAR = "popular";
      const RECENT = "recent"      
      if(selected === POPULAR) {
        testData.sort((a, b) => {
          return b.like - a.like
        });
      } else if(selected === RECENT) {
        testData.sort((a, b) => {
          return b.date - a.date
        });
      }
    },
    */
  },
  created() {
    // this.CardNewsSort();
  }
}   
</script>
<style>
  .breadcrumb {
    display:flex;
    justify-content: flex-start;
    margin: 20px;
  }

  .button {
    border-radius: 5px;
  }

  .button.is-selected {
    background-color:rgb(240, 179, 157);
  }

  .buttons_select_view .button:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .buttons_select_view .button:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  #news_sort_selector {
    width:80px;
    height: 40px;
    margin-left: 10px;
  }

  .cardnews-wrapper {
    display: flex;
    align-items: center;
  }

  .cardnews-wrapper .subscribing {
    background-color: rgb(240, 179, 157);
  }
</style>