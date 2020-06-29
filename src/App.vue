<template>
  <div id="app">
    <div class="header">
      <div id="nav-drawer">
        <input id="nav-input" type="checkbox" class="nav-unshown">
        <label id="nav-open" for="nav-input"><span></span></label>
        <label class="nav-unshown" id="nav-close" for="nav-input"></label>
        <div id="nav-content">
          <a class="baritem a"><router-link to="/">TOP</router-link></a><br>
          <a class="baritem a" href="https://www.tus.ac.jp/">ホームページ</a><br>
          <a class="baritem a">Youtube</a><br>
          <a class="baritem a">Twitter</a><br>
        </div>
      </div>
      <router-link to="/"><div class="bar">M.Q.</div></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  created () {
   window.scroll(0,0)
 }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select: none;
  margin: 0;
}

.body{
  margin-top: 100px;
}

a {
  text-decoration: none;
  color: black;
}
.a {
  font-family: 'EB Garamond', serif;
  color: black;
  font-size: 25px;
  position: relative;
  display: inline-block;
  transition: .3s;
}
.a::after {
  position: absolute;
  bottom: .3em;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background-color: #2ecc71;
  opacity: 0;
  transition: .3s;
}
.a:hover::after {
  bottom: 0;
  opacity: 1;
}

#nav {
  padding: 30px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// ハンバーガー
.bar{
    font-family: 'Amatic SC', cursive;
    text-align: center;
    font-size: 35px;
    /* background-color: rgb(175, 255, 255); */
}

.header {
    position: fixed;
    width: 100%;
    padding:10px;
    background: skyblue;
    height: 70px;
    top: 0;
    left: 0;
    margin: 0;
    z-index: 2;
}

#nav-drawer {
  margin: 0;
  width: 30px;
  position: relative;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}

/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}

/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
  float:left;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}

/*閉じる用の薄黒カバー*/
#nav-close {
  display: none;/*はじめは隠しておく*/
  position: fixed;
  z-index: 99;
  top: 0;/*全体に広がるように*/
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}

/*中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  text-align: center;
  padding: 20px;
  background-color: rgb(204, 249, 255);
  top: 0;
  left: 0;
  z-index: 9999;/*最前面に*/
  width: 90%;/*右側に隙間を作る（閉じるカバーを表示）*/
  max-width: 250px;/*最大幅（調整してください）*/
  height: 100%;
  background: #fff;/*背景色*/
  transition: .3s ease-in-out;/*滑らかに表示*/
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/*左に隠しておく*/
}
/*チェックが入ったらもろもろ表示*/
#nav-input:checked ~ #nav-close {
  display: block;/*カバーを表示*/
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/*中身を表示（右へスライド）*/
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
</style>
