const Koa = require("koa");
const parser = require("koa-parser");// 获取post请求数据
const router = require("koa-router")();// 设置路由
const static = require("koa-static"); // 设置静态文件目录
const cors = require("koa2-cors"); // 允许跨域

const app = new Koa();

app.use(cors());
app.use(parser());
app.use(static(__dirname+"/public"));
app.use(router.routes());

// 模拟数据库
const studentList = [
    {id:1, name:"小明", "age":2},
    {id:2, name:"小红", "age":4},
    {id:3, name:"小亮", "age":6},

];

router.get("/student", async ctx => {
    ctx.body = studentList;
})

router.post("/student", async ctx => {
    let student = ctx.request.body.student;
    studentList.push(student);
    ctx.body = true;
})

router.delete("/student/:id", async ctx => {
    let id = ctx.params.id;
    studentList.map((item, index) => {// 通过map方法遍历这数组，从而对某些元素进行删除
        if(item.id == id){
            studentList.splice(index,1);// 删除某个id的元素
        }
    })
    ctx.body = true;
})

app.listen(3000, () => {
    console.log("服务器启动啦")
})