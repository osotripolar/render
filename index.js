import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello mdfk')
})

app.listen(3000)
console.log('Server on port', 3000)