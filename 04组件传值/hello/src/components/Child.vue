<template>
    <div>
        <h1>我是Child组件</h1>
        <h1>{{msg}}</h1>
        <button @click="sendData">传递数据</button>
    </div>
</template>

<script>
// 子级向父级传递数据：用自定义事件
export default {
    props:["msg"],
    data(){
        return {
            childData:"I'm child"
        }
    },
    methods:{
        sendData(){
            this.$emit("myevent", this.childData)
        }
    }
}
</script>