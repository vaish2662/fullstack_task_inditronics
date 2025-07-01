const express = require('express')
const app = express()

app.get('/api/hello',(req,res)=>{
    res.send("<h2>hello World!</h2>")
    
})

app.listen(3000);

