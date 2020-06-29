<template>
  <div class="body">
    <em class="title">{{title}}</em>
    <div class="questions">
      <div v-for="member in members" :key="member.message">
        <router-link :to= "'/question/'+member.rink">
          <a class="a choiced" >{{ member.name }}</a>
        </router-link>
      </div>
      <router-view class="view"></router-view>
    </div>
    <router-link to="/"><div class="a" style="font-size:20px; margin-top:40px">HOMEに戻る</div></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  props:{
    title:String,
    members:Array
  }
}
</script>

<style lang="less">
.questions{
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
}
a {
    text-decoration: none;
    text-align: center;
    color: black;
}
.choiced{
  margin: 15px 60px 15px 60px;
}
</style>