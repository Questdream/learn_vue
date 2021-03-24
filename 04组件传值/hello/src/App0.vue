<template>
  <div>
      <h1>{{childData}}</h1>
      <child @myevent="changData" :msg="message"></child>
  </div>
</template>

<script>

// 父级向子级传递数据：使用属性传递
import Child from "./components/Child"
export default {
  components:{Child},
  data(){
    return{
      message:"app.vue data",
      childData:""
    }
  },
  methods:{
    changData(childData){
      this.childData = childData;

    }
  }


  
}
</script>

<style>

</style>
