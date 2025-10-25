import express from 'express'
import { __dirname } from "./roots.js";
import { iniciarSaludos} from './wakeServer.js';


// Inicia la app
const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.use('/tareas',express.static('static-tareas', {root: __dirname})) // así servimos toda la carpeta

// Ejecución
app.listen(3000, '0.0.0.0' ,() =>{
    console.log('Server on port', 3000, ' y en ', '0.0.0.0')
})

// Para ver en el móvil usar esta ruta:
// Abrir el cmd: ipconfig => luego buscar la ipconfig el valor de la clave: Dirección IPv4:
// Luego buscar en el móvil 192.168.1.59:3000 (donde la ip es el IPv4, y el último número es el número de puerto)