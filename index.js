require('dotenv').config()
const express = require ("express")
const app = express() 

  


app.get("/" , ( req, res) => {res.send ("Hello archit" )
}) 
app.get("/twitter" , (req , res)=>{ res.send("heelo we are inside twiteetr pge")

})

app.listen(process.env.PORT ,()=>{console.log(`example appp listen on port`)})