// Principalmente esto activa todo lo que estaba oculto en cuanto nos "registremos
const hiddenElements = document.querySelectorAll('.hidden-content')
const btnRegister = document.getElementById('btn-register')

const password = 'chino'

btnRegister.addEventListener('click', ()=>{

    // capturamos el texto que está dentro del boton
    const btnText = btnRegister.innerText

    if ( btnText === 'Log In'){
        btnRegister.innerText = 'Log Out'
        showHidden()
    }
    
    if ( btnText === 'Log Out'){
        btnRegister.innerText = 'Log In'
        showHidden()
    }

})

// Esto alterna a cada elemento entre visible e invisible
function showHidden(){
    hiddenElements.forEach(e => {
        e.classList.toggle('hidden-content')
    })
}

// LOCAL STORAGE --------------------

const doHaveAcces = ()=>{

    if(localStorage.getItem('acces')){ // si existe lo examina

        switch(localStorage.getItem('acces')){
            case 'false':
                return false;
                break;
            case 'true':
                return true;
                break;
            default:
                console.log('Hubo un error inesperado');
                return false;
        }

    }else{ // si no existe lo crea
        localStorage.setItem('acces','false')
        return false
    }
}