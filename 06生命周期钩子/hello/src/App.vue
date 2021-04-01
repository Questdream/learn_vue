<template>
  <div id="app">
    <h1>水果列表</h1>
    <p v-if="lding">loading...</p>
    <ul v-if="!lding">
      <li v-for="(item,index) of fruitList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>


export default {
  data(){
    return {
      fruitList: [],
      lding: true
    }
  },
  created(){
    this.getData();
    
  },
  methods:{
      //通过计时器模拟一个ajax获取数据的方法
      getData(){
      setTimeout(() => {
        this.fruitList = ["香蕉", "苹果", "鸭梨"];
        this.lding=false;
      }, 2000)
    }
  }
}
</script>

<style>

</style>
