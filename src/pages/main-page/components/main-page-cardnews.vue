<template>
  <div class="Main_Card">
    <div class="Main_Card__Cardnews">
      <!-- hover 부분 -->
      <div class="Main_Card__Cardnews__card card-0"></div>
      <div class="Main_Card__Cardnews__card card-0"></div>
      <div class="Main_Card__Cardnews__card card-0"></div>
      <div class="Main_Card__Cardnews__card card-0"></div>
      <div class="Main_Card__Cardnews__card card-0"></div>
      <div class="Main_Card__Cardnews__card card-0"></div>
    </div>
  </div>
</template>

<style>
.Main_Card {
  height: 100%;
  background: white;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: scroll;
}
.Main_Card__Cardnews__card {
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  height: 400px;
  margin: 30px;
  width: 400px;
  border: 1px solid;
}

.card-0:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.Main_Card__Cardnews {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
