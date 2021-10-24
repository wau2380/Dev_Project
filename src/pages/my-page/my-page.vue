<template>
  <div id="layout">
    <my-page-header> </my-page-header>
    <my-page-logo :UserMyPage="UserMyPage"></my-page-logo>
    <my-page-cardnews> </my-page-cardnews>
  </div>
</template>

<style>
body {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}
body a {
  text-decoration: none;
  color: black;
}
/* li {
  list-style: none;
} */
</style>

<script src="./my-page.js"></script>
