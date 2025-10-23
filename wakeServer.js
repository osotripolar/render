const tiempo = 15 //en segundos
const mensaje = `Hace ${tiempo} segundos apareció un mensaje de monitoreo como mensaje como este`

const date = new Date()
const hh = date.getHours()

const saludar = () =>{
    console.log(mensaje)
}

const iniciarSaludos = () => { 
    console.log(`Cada ${tiempo} segundos aparecerá un nuevo mensaje de monitoreo`)
    console.log('esta es la fecha : ', date)
    console.log('esta es la hora : ', hh)
    setInterval(saludar,(tiempo * 1000))
} 

export {iniciarSaludos, saludar}