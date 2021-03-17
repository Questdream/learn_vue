// import ES2015模板语法，可以引入第三方模块 。 require
// export ES2015模板语法，暴露接口 ，可以被其他模块调用module.exports
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false   //配置开发选项，友好的错误提示

new Vue({
  render: h => h(App),
  // render(createElement){
  //   return createElement(app)
  // }
}).$mount('#app')
