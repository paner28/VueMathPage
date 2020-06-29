<template>
  <div class="body">
    <div class="sandbox sandbox-correct-pronounciation">
      <h1 class="heading heading-correct-pronounciation">
        The
          <em>Question Of Math</em>
        Education
      </h1>
    </div>
    <div class="bunnya">
      <div v-for="section in sections" :key="section.message">
        <router-link :to= "'/page'+section.rink">
          <div class="button" >{{ section.name }}</div>
        </router-link>
      </div>
    </div>
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
 },
 props:{
   sections:Array
 }
}
</script>

<style lang="less">
.bunnya{
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
}

.button {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 25px;
  padding: .7em 4em;
  border: 2px solid #333;
  color: #333;
  text-align: center;
  text-decoration: none;
  transition: .3s;
  margin: 10px 40px 10px 40px;
}
.button:hover {
  color: #fff;
}
.button{
  overflow: hidden;
}
.button::before {
  position: absolute;
  top: 0;
  left: -5%;
  z-index: -1;
  content: '';
  width: 110%;
  height: 180%;
  background: #333;
  transform-origin: left bottom;
  transform: skewY(-10deg) scale(1, 0);
  transition: transform .3s;
}
.button:hover::before {
  transform-origin: left top;
  transform: skewY(-10deg) scale(1, 1);
} 
.sandbox-correct-pronounciation {
    padding: 100px 0 100px 0;
    margin-top: 9px;
}
.heading-correct-pronounciation {
    margin: auto;
    text-align: center;
    position: relative;
    font-size: 28px;
}
em {
    font-family: 'EB Garamond', serif;
    font-size: 3.5em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    font-style:normal;
    padding-top: 0.1em;
    text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
}
</style>