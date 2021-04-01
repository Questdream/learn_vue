<template>
  <div id="app">
    <h1>计算属性与侦听器</h1>
    <!-- <p>{{title}}</p>
    <p>{{message}}</p>
    <p>名字：{{name}}</p> -->

    <p>单价：{{price}}</p>
    <p>
      <button @click="sub">-</button>
      {{quantity}}
      <button @click="add">+</button></p>
    <p>折扣：{{discount}}</p>
    <p>总价：{{totalPrice}}</p>
  </div>
</template>

<script>

export default {
  mounted(){
    console.log("这是mounted函数的内容")
  },
  created(){
    console.log("这是created函数的内容")
  },
  data(){
    return{
      title: "hello world",
      firstName:"zhang",
      lastName:"san",
      price:99,
      quantity: 0,
      discount:0.5,
      totalPrice:0
    }
  },
  // computed:{
  //   message(){
  //     return "hello computed"
  //   },
  //   name(){
  //     return this.firstName+this.lastName
  //   },
  //   totalPrice(){
  //     return this.price*this.quantity*this.discount
  //   }
  // },
  watch:{
    quantity(val){
      this.totalPrice =this.price*val*this.discount
    }
  },
  methods:{
    sub(){
      if(this.quantity>0){
        this.quantity--
      }
     
    },
    add(){
      this.quantity++
    }
  }
}
</script>

<style>


</style>
