import express from 'express'
import { __dirname } from "./roots.js";
import { iniciarSaludos} from './wakeServer.js';

// Inicia la app
const app = express()

iniciarSaludos()

app.use('/',(req,res)=>{
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.listen(3000)
console.log('Server on port', 3000)