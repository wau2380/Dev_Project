<template>
  <header class="row1">
    <div class="wrap_header">
      <div class="header_logo">
        <router-link to="/">NEWS</router-link>
      </div>
      <nav class="menu">
        <router-link to="/">홈</router-link>
        <router-link to="/Company">기업검색</router-link>
        <router-link to="/MyPage">마이페이지</router-link>
      </nav>
      <div class="search">
        <input type="text" placeholder="검색어 입력" />
        <!-- <button>검색</button> -->
      </div>
      <div class="user">
        <router-link to="/Login">로그인</router-link>
        <router-link to="/Join">모드</router-link>
      </div>
    </div>
  </header>
</template>

<style>
  .row1 {
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: white;

    top: 0;
    left: 0;
    right: 0;
    
    border: 0;
    z-index: 1000;
    transition-duration: 0.5s;
  }
  .header_none {
    top: -70px;
  }
  .row1 a {
    font-weight: bold;
    color: #4e5968;;
    padding: 12px 10px;
  }
  .row1 a:hover {
    color: black;
  }
  .row1 .wrap_header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
  }
  .row1 .header_logo {
    background-color: #f60;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 55px;
    height: 100%;

    margin-right: 20px;
  }
  .row1 .header_logo>a {
    color: white;
  }
  .wrap_header .menu {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .wrap_header .search {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 40px;
    flex: 1;
  }
  .wrap_header input {
    width: 100%;
    height: 50%;
    color: #5f5f5f;

    font-size: 20px;
    text-align: center;
    border-radius: 3px;
  }
  .wrap_header .search>button {
    background-color: #f60;
  }
  .wrap_header .user{
    display: flex;
    height: 100%;
    align-items: center;

    margin-right: 15px;
  }
</style>