<template>
  <div id="app">
    <div id="nav">
      <!-- 类似于a标签 -->
      <router-link to="/">首页</router-link> |
      <router-link to="/blog">博客</router-link> |
      <router-link to="/video">视频</router-link>   ||

      <span v-if="showUser">欢迎：{{username}} <button @click="logout">注销</button></span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
   data(){
     return {
       username:localStorage.getItem("usr"),
       showUser:localStorage.getItem("usr")
     }
   },
   // 侦听路径来设置网页某个值达到立刻就能变化的目的
   watch:{
     "$route.path": function(){
       this.username = localStorage.getItem("usr");
       this.showUser = localStorage.getItem("usr")
     }
   },
   methods:{
     logout(){
       localStorage.clear();
       this.$router.push("/login")
     }
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
