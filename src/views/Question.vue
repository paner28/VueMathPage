<template>
  <div class="body">
    <div class="parent1">
      <div>
        <b class="left"><vue-mathjax :formula="title"></vue-mathjax></b>
        <div class="left"><vue-mathjax :formula="question"></vue-mathjax></div>
      </div>
    </div>
    <div class="left"><vue-mathjax :formula="example"></vue-mathjax></div>
    <form name="form">
      <div class="parent2">
        <div class="left">
          <span>答え:</span>
          <input v-model="text" type="text" name="answer" id="answer" size="12" maxlength="20">
          <input type="button" value="送信" id="send" style="margin-left:5px" v-on:click="greet">
        </div>
      </div>
    </form>
    <div><router-link to="/Page1"><div class="a" style="font-size:20px">Sectionに戻る</div></router-link></div>
    <router-link to="/"><div class="a" style="font-size:20px; margin-top:40px">HOMEに戻る</div></router-link>
  </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  },
  name: 'HelloWorld',
  data () {
    return {
      text:"",
    }
  },
  props:{
    title: String,
    question: String,
    example: String,
    answer: String,
  },
  methods: {
    greet: function () {
      // alert('Hello ' + this.name + '!')
      if (this.answer == this.text) {
        alert("正解です🎊")
      }else{
        alert("不正解です(´;ω;｀)")
      }
    }
  }
}
</script>

<style>
.parent1{
    display: flex;
}
.parent2{
    display: flex;
    justify-content: space-between;
}
.left{
    float: left;
}
.right{
    float: right;
}
</style>