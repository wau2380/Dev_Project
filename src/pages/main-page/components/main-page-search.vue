<template>
  <div class="row1">
    <div class="search">
      <input type="text" placeholder="검색어 입력" />
      <button>검색</button>
    </div>
  </div>
</template>

<style>
.row1 {
  flex: 0.3;
  height: 50px;
  padding-bottom: 5px;
  justify-content: center;
}
.search {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  width: 700px;
  border: 5px solid white;
  background: whitesmoke;
  justify-content: center;
  margin: auto;
  border: 1px solid;
}
input {
  font-size: 16px;
  width: 630px;
  padding: 10px;
  border: 0px;
  outline: none;
  float: left;
}
button {
  width: 50px;
  height: 100%;
  border: 0px;
  outline: none;
  float: right;
}
</style>
