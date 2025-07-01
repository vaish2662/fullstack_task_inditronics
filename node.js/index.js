const express = require('express')
const app = express()

app.use(express.json())

app.get('/api/hello',(req,res)=>{
    // res.send("<h2>hello World!</h2>")
     res.send({
            message:"Hello world",
        })
    
})

app.listen(3000);

