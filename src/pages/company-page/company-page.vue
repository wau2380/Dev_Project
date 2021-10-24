<template>
  <div id="layout">
    <company-page-header />
    <company-page-user-list :UserCompanys="UserCompanys"></company-page-user-list>
    <company-page-total-list :companys="companys"></company-page-total-list>
  </div>
</template>

<script src="./company-page.js"></script>

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
li {
  list-style: none;
}
</style>
