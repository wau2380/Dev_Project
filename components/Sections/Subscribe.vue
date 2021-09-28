<template>
  <div>
    <button v-bind:class="state" v-on:click="SaveNews">저장</button>
    <button class="kakao" v-on:click="sendKakao">공유</button>
    {{"좋아요: " + test.like}}
    {{"기사명: " + test.title}}
    {{"날짜: " + test.date}}
  </div>    
</template>

<script>
export default {
  props: {
    test: Object,
    index: Number
  },
  data() {
    return {
      state:"",
    }
  },
  computed: {
  },
  methods: {
    SaveNews(event) {
      let currentState = event.target.classList.value;

      if (currentState === "subscribe") {
        this.state = "subscribing";
        return this.$parent.testData[this.index].save = true
      } else {
        this.state = "subscribe";
        return this.$parent.testData[this.index].save = false;  
      }
    },
    sendKakao() {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '디저트 사진',
          description: '아메리카노, 빵, 케익',
          imageUrl:
          'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecutionParams: 'test',
            webUrl: 'https://developers.kakao.com'
          },
        },
        /*
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 보기',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
            },
          },
        ],
        */
      });
    },
    SaveRender() {
      if (this.test.save) {
        this.state = "subscribing";
      } else {
        this.state = "subscribe";
      }
    }
  },
  created() {
    this.SaveRender();
  },
  updated() {
    this.SaveRender();
  }
}
</script>

<style>

</style>