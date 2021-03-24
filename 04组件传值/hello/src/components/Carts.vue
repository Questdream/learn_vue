<template>
    <div>
        <h1>购物车</h1>
        <ul>
            <li v-for="(v,i) of fruits" :key="i">
                {{v.name}}
                单价：{{v.price}}
                <counter 
                    :qu="v.qu" 
                    :index="i"
                    @add="add" 
                    @sub="sub"
                ></counter>
            </li>
        </ul>
    </div>
</template>


<script>
import Counter from "./Counter"
export default {
    components:{Counter},
    data(){
        return {
            fruits:[
                {name:"苹果", price:3.14, qu:0},
                {name:"鸭梨", price:2.14, qu:0},
                {name:"香蕉", price:3.2, qu:0},
            ]
        }
    },
    methods:{
        add(index){
            this.fruits[index].qu++
        },
        sub(index){
            if(this.fruits[index].qu>0){
                 this.fruits[index].qu--
            }
           
        }
    }
}
</script>