<template>
  <body>
    <company-page-search />
    <company-page-bar />
    <company-page-user-list
      :UserCompanys="UserCompanys"
    ></company-page-user-list>
    <company-page-total-list :companys="companys"></company-page-total-list>
  </body>
</template>

<script src="./company-scripts/company.js"></script>

<style>
body {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}
</style>
