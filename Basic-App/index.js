const express=require("express");
const app =express();

app.get("/",(req,res)=>{
    res.json([
        {
            name:"yashhh",
            phone:333333333333333,
            age:29
        },{
            name:"Vikash",
            phone:1233342,
            age:40
        },{
            name:"Dhiraj",
            phone:87777666,
            age:50
        },{
            name:"yash4",
            phone:6666666666,
            age:30
        }
    ])
});
app.listen(5000,()=>{
    console.log("app is running")
})