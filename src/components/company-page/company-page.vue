<template>
  <body>
    <company-page-search/>
    <company-page-bar/>
    <div class="row3">
      <div id="company_page">
        <company-page-user-list :UserCompanys="UserCompanys"></company-page-user-list>
        <company-page-total-list :companys="companys"></company-page-total-list> 
      </div>
    </div>
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