const tiempo = 5 //en segundos
const mensaje = `Hace ${tiempo} segundos apareció un mensaje de monitoreo como mensaje como este`

const saludar = () =>{
    console.log(mensaje)
}

const iniciarSaludos = () => { 
    console.log(`Cada ${tiempo} segundos aparecerá un nuevo mensaje de monitoreo`)
    setInterval(saludar,(tiempo * 1000))
} 

export {iniciarSaludos, saludar}