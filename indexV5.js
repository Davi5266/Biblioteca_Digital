const express = require("express")

const app = express()
const port = 5000

app.get("/", (req,res)=>{
    console.log("OKOK")
})

app.listen(port,()=>{
    console.log(`Servidor roando na porta ${port}`)
})