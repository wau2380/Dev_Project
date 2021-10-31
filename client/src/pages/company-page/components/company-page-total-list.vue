<template>
  <div class="total_company_container">
    <p class="title">기업 목록</p>
    <ul class="companys">
      <li v-for="( company, i ) in companys[pageNum - 1]" v-bind:key="i">
        <img :src="company.logo" alt="">
        <button class="subscribe_button" v-on:click ="clickButton">구독</button>
      </li>
    </ul>
    <div class="page_btn_cover">
      <button class="prev_button" v-on:click="movePage">이전</button>
      <span class="page_count">{{ pageCount }}</span>
      <button class="next_button" v-on:click="movePage">다음</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'companys' : Array
  },
  data() {
    return{
      pageNum : 1,
    }
  },
  computed: {
    pageCount() {
      let total = this.companys.length;
      return `${this.pageNum} / ${total}`
    }
  },
  methods: {
    clickButton() {
      alert("구독되었습니다.")
    },
    movePage(event) {
      let btnClass = event.target.className;
      let nextButton = "next_button";

      if (btnClass === nextButton) {
        if ( this.pageNum < this.companys.length ) {
          this.pageNum += 1;
        }
      } else {
        if ( this.pageNum > 1) {
          this.pageNum -= 1;
        }
      }
    }
  }
}
</script>

<style>
  .total_company_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;

    overflow: scroll;
  }
  .total_company_container .title {
    font-size: 35px;
    font-weight: bold;

    margin-top: 20px;
  }
  .total_company_container .companys {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
  }
  .total_company_container .companys li {
    width: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0;
    border: 1px solid gray;
    border-radius: 25px;
    margin: 20px;
  }
  .total_company_container .companys li img {
    width: 300px;
    height: 300px;
    display: block;
    
    border-radius: 25px;
  }
  .total_company_container .companys li .subscribe_button {
    display: none;
  }
  .total_company_container .companys li:hover {
    opacity: 0.5;
  }
  .total_company_container .companys li:hover .subscribe_button {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;

    border-radius: 25px;

    font-size: 30px;
    font-weight: bold;
  }
  .page_btn_cover {
    display: flex;
    align-items: center;

    font-size: 20px;
  }
  .page_btn_cover button {
    width:auto;
    height: auto;

    font-size: inherit;

    border: 1px solid black;
    margin: 0 10px;
  }
</style>
