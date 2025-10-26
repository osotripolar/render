import {APIKEY_SUPABASE, URL_SUPABASE_TABLE } from "/listas/roots.js";

// ELEMENTOS HTML

const tbody = document.querySelector('tbody')
const template = document.querySelector('template');
const form = document.querySelector('form');
const btnAdd = document.getElementById('button-add')
const inputName = document.getElementById('name')
const inputDesc = document.getElementById('description')

form.addEventListener('submit' , e =>{
    e.preventDefault(); // Previene el submit que hay x defecto el form
})

// CRUD
const getData = async()=>{
    const query = 'lists?select=*'
    const response = await fetch( `${URL_SUPABASE_TABLE}${query}`,{
        headers:{
            'apikey' : APIKEY_SUPABASE
        }  
    });
    const data = await response.json()
    return data;
}

const postData = async()=>{
    const query = 'lists'
    const object = {method: 'POST',
        headers:{
            'apikey' : APIKEY_SUPABASE,
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({
            name: inputName.value,
            description : inputDesc.value
        })}

    const response = await fetch( `${URL_SUPABASE_TABLE}${query}`,object)

}

btnAdd.addEventListener('click', async ()=>{

    // Cuando no se cumplan los campos llenos el mismo form recalcará que deben llenar los campos
    if(!(inputDesc.value == '' || inputName.value == '')){
        await postData()
        // limpiamos los campos
        inputName.focus()   
        inputDesc.value = '' ;
        inputName.value = '';
        tbody.textContent=''
        mostrarDatos()
    }
    
})

// CREACIÓN DE TABLA

const mostrarDatos = async()=>{
    const data = await getData()
    
    data.forEach(element => {

        const clone = template.content.cloneNode(true)

        const tr = clone.querySelector('tr')
        const name = clone.querySelector('.name')
        const description = clone.querySelector('.description')
        const link = clone.querySelector('.link a')

        tr.setAttribute('data-id', element.id)
        

        
        // link.setAttribute('href', element.link)

        name.innerText = element.name
        description.innerText = element.description

        tbody.append(clone)

    });

}

// EJECUCIÓN INICIAL
mostrarDatos()