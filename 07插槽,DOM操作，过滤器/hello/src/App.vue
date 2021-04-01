<template>
  <div id="app">
      <!-- <div id="box" ref="bx">hello world</div> -->
      <!-- <my-button>提交</my-button>
      <my-button>注册</my-button> -->
      <!-- <layout>
          <template v-slot:header>
              <h1>header</h1>
          </template>
           <template v-slot:content>
              <h1>content</h1>
          </template>
           <template v-slot:footer>
              <h1>footet</h1>
          </template>
      </layout> -->
      <h1>{{message | mySplit}}</h1>
      <h1>{{date | dateFormate}}</h1>
  </div>
</template>

<script>
// window.getComputedStyle(dom)
export default {
  // mounted(){
  //   // let box = document.querySelector("#box");
  //   // let style = window.getComputedStyle(box);
  //   // console.log(style.height)
  //   let box = this.$refs.bx
  //   let style = window.getComputedStyle(box);
  //   console.log(style.height)
  // }
  data(){
    return {
      message:"hello world",
      date:"2020-1-1"
    }
  },
  filters:{
    mySplit(value){
      return value.split("").join();
    },
    dateFormate(value){
        let date = new Date(value);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let d = date.getDate();
        return `${year}年${month}月${d}日`
    }
  }
}
</script>

<style>
/* div{
  width: 100px;
  height: 100px;
  background-color: red;
} */
</style>
