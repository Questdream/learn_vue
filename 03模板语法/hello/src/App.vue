<template>
  <div>
    <hello></hello>
    <Menu-List></Menu-List>
    <!-- v-if:是不渲染dom -->
    <!-- <h1 v-if="true">hello world</h1> -->
    <!-- v-show: 渲染dom，然后将元素设置为display为none -->
    <!-- <h2 v-show="false">hello vue</h2> -->
    <!-- <p v-if="isLogin">欢迎：小明</p>
    <p v-if="!isLogin"><a href="">请登录</a></p>
    <ul>
      <li v-for="(fruit, index) of fruits" :key="index">
        <p>水果名称：{{fruit}}</p>
        <p>水果序号：{{index}}</p>
      </li>
    </ul>
    <table>
        <thead>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
        </thead>
        <tbody>
          <tr v-for="(v,i) of students" :key="i">
            <td>{{i+1}}</td>
            <td>{{v.name}}</td>
            <td>{{v.age}}</td>
          </tr>
        </tbody>
    </table> -->
  </div>
</template>

<script>
import hello from "./components/hello.vue"
import MenuList from "./components/MenuList"
export default {
  // 注册组件
  components: { hello,MenuList},
  data(){
    return {
      isLogin: false,
      fruits: ["香蕉", "苹果", "鸭梨"],
      students: [
        {name: "小明", age: 1},
        {name: "小红", age: 3},
        {name: "小四", age: 4}
      ]
    }
  }

}
</script>

<style>

</style>
