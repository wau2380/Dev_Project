<template>
  <div class="row2">
    <ul class="top-menu">
      <li class="menu_li"><a class="menus" href="">Home</a></li>
      <li class="menu_li"><a class="menus" href="">Company</a></li>
      <li class="menu_li"><a class="menus" href="">Mypage</a></li>
      <li class="menu_li"><a class="menus" href="">Logout</a></li>
    </ul>
  </div>
</template>

<style>
.row2 {
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
@media screen and (max-width: 768) {
  .row2 {
    flex-direction: column;
  }
  .top-menu {
    flex-direction: column;
  }
  .li {
    padding: 0px 30px;
  }
}
.top-menu {
  display: flex;
  color: white;
  float: left;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
}
ul {
  list-style-type: none;
  float: left;
  justify-content: center;
  margin: 5px auto;
  padding: 0;
}
.menu_li {
  text-decoration: none;
  color: black;
  padding-right: 60px;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  display: inline;
}
</style>
