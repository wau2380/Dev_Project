<template>
  <div id="Card_News">
    <div class="Card_Container">
      <div class="card card-0"></div>
      <div class="card card-1"></div>
      <div class="card card-2"></div>

      <div class="card card-3"></div>
      <div class="card card-4"></div>
      <div class="card card-5"></div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div id="Card_News">
    <div class="Card_Container">
      <div class="card card-0"></div>
      <div class="card card-1"></div>
      <div class="card card-2"></div>
      <div class="card card-3"></div>
      <div class="card card-4"></div>
      <div class="card card-5"></div>
    </div>
  </div>
</template>

<style>
#Card_News {
  height: 100%;
  background: whitesmoke;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: scroll;
}
.card {
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  height: 300px;
  margin: 30px;
  width: 300px;
  border: 1px solid;
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card-0:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card-2:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.card-3:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.card-4:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.card-5:hover {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
.Card_Container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
