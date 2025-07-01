const express = require('express')
const app = express()

app.use(express.json())

app.get('/api/hello',(req,res)=>{
    res.send("<h2>hello World!</h2>")
     res.status(200).send({
            success:true,
            message:"Hello world",
            
        })
    
})

app.listen(3000);

