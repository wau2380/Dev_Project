<template>
  <div class="row3">
    <div id="Card_News">
      <div class="Card_Container">
        <div class="card card-0"></div>
      </div>
    </div>
    <div class="login">
      <div class="login_id">
        <h4>ID</h4>
        <input type="email" name="" id="" placeholder="ID" />
      </div>
      <div class="login_pw">
        <h4>Password</h4>
        <input type="password" name="" id="" placeholder="Password" />
      </div>
      <div class="login_etc">
        <div class="checkbox">
          <input type="checkbox" name="" id="" /> 아이디저장
        </div>
        <div class="join_members">
          <button type="button" class="join_member" onClick="location.href=''">
            회원가입
          </button>
        </div>
      </div>
      <div class="submit">
        <input type="submit" value="Log in" />
      </div>
      <div class="login_sns">
        <li class="sns_li">
          <a href="">인스타<i class="fab fa-instagram"></i></a>
        </li>
        <li class="sns_li">
          <a href="">페북<i class="fab fa-facebook-f"></i></a>
        </li>
        <li class="sns_li">
          <a href="">트위터<i class="fab fa-twitter"></i></a>
        </li>
      </div>
    </div>
  </div>
</template>

<style>
.row3 {
  flex: 1;
  flex-shrink: 1;
  overflow: auto;
  display: flex;
  margin: 0 15%;
}
#Card_News {
  height: 80vh;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
}
.card {
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  height: 450px;
  margin: 30px;
  width: 370px;
  border: 1px solid;
  flex-shrink: 1;
}
.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card-0:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.Card_Container {
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
}
.login {
  display: flex;
  flex: 1;
  width: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h4 {
  margin: 3px;
}
h2 {
  color: tomato;
  font-size: 2em;
}
.login_sns {
  padding: 20px;
  display: flex;
}
.login_sns li {
  padding: 0px 20px;
  list-style-type: none;
}
.login_sns a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background: white;
  font-size: 15px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.1);
}
.login_id {
  margin-top: 20px;
  width: 80%;
}
.login_id input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}
.login_pw {
  margin-top: 20px;
  width: 80%;
}
.login_pw input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}
.login_etc {
  padding: 10px;
  width: 80%;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
}
.submit {
  margin-top: 10px;
  width: 80%;
}
.submit input {
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 40px;
  background: yellowgreen;
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;
}
.join_members {
  flex: 0.4;
}
.join_member {
  height: 40px;
  width: 100px;
}
</style>
