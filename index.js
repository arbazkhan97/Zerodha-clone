
const express =require('express');

const app=express();
const port=3002;


app.get('/',(req,res)=>{
    res.send('hello ,this is my first express server');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})