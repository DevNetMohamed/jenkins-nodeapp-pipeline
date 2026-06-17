import express from 'express'
const app =  express();
const port = 4000;
app.use("/", ()=>{
    return "Hello from Node.js"
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})