



//  create server 
const express = require('express')
const PORT = 5000;
const app = express()
app.listen(PORT, async()=>{
    console.log(`server is running on ${PORT}`)
})
// 

app.use(express.json());

//  we can use api app.get , app.post in this also
//  just to understand routes , created the router file

// import router 

app.get('/', async (re, res)=>{
    try{
        res.send("Welcome to employee record application")
    }
    catch{

    }
})
const router = require('./routes/router')
app.use(router)


