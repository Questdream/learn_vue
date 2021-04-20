<template>
    <div>
        <form @submit.prevent="doLogin">
            <input type="text" v-model="username"> 
            <input type="password" v-model="password">
            <button>登录</button>
        </form>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
       doLogin(){
        //    console.log(this.username)
        // 本地存储使用setItem来设置的键值对，通过getItem来获取设置的属性值。
        localStorage.setItem("usr", this.username);
        this.$router.push("/")
       }
    }
}
</script>