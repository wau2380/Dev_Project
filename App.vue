<template>
  <body>
    <div class="row1">
      <div  class="search">
        <input type="text" placeholder="검색어 입력">
        <button>검색</button>
      </div>
    </div>

    <div class="row2">
       <ul class="top-menu">
        <li><a class="menus" href="#">home</a></li>
        <li><a class="menus" href="#">Company</a></li>
        <li><a class="menus" href="#">Mypage</a></li>
        <li><a class="menus" href="#">logout</a></li>
       </ul>
    </div>
   <div class="row3">
      
   </div>
  </body>
</template>

<script>

export default {
  name:"DEV",
  components: {
  }
}
</script>

<style>
body{
  width:100%;
  height: 100%;
  margin-left:0;
  margin-right:0;


}

.row1{
  flex:0.3;
  height: 50px;
  padding-bottom:5px;
  border-bottom:3px solid;
  justify-content: center;

}

.search{
  height:40px;
  width:700px;
  border:5px solid white;
  background:whitesmoke;
  justify-content: center;
  margin:auto;
  border:1px solid;
}

input{
  font-size:16px;
  width:630px;
  padding:10px;
  border:0px;
  outline:none;
  float:left;
}

button{
  width:50px;
  height:100%;
  border:0px;
  outline:none;
  float:right;
  
 
}

.row2{

  border-bottom:3px solid;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color:rgb(240, 179, 157);
}

@media screen and (max-width:768){
  .row2{
    flex-direction:column;
  }
  .top-menu{
    flex-direction:column;
  }
  .li{
      padding:0px 30px;

  }

}

.top-menu{
  display:flex;
  color: white;               
  float: left;              
  line-height: 30px;          
  vertical-align: middle;    
  text-align: center;
  justify-content: center;
 
}
ul{
  list-style-type: none; 
  float:left; 
  justify-content: center;
  margin:5px auto;
  padding:0;
}


li{
  text-decoration:none;
  color:black;
  padding-right: 60px;
  width:150px;
  font-size:15px;
  font-weight: bold;
  display:inline;
}


</style>
