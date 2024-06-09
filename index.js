import {saveTask1, onGetTasks1, deleteTask1, getOnlyTask1, updateTask1,
    saveTask2, onGetTasks2, deleteTask2, getOnlyTask2, updateTask2,
    saveTask3, onGetTasks3, deleteTask3, getOnlyTask3, updateTask3
} from './firebase.js'


const taskForm = document.getElementById(`datos-contactos`);
const taskForm2 = document.getElementById(`datos-lista`);
const taskForm3 = document.getElementById(`datos-libreria`); 
const tasksContainer1 = document.getElementById('tasks-container1')
const tasksContainer2 = document.getElementById('tasks-container2')
const tasksContainer3 = document.getElementById('tasks-container3') 

// PRIMERA COLECCIÓN //

let Editar = false;
let id = '';

window.addEventListener('DOMContentLoaded', async () => {
    
   onGetTasks1((querySnapshot)=> {
        let html = ''
        let i = 1
        querySnapshot.forEach(doc => {
            const datos = doc.data();
            html += `
            <div class="DatosRegistrados">
             <div class="datos">
             <p class="actualizacion">${i++}<p>
             <div class="datos2">
             <h2> Datos: </h2>
             <fieldset> 
             <table>       
             <p>Nombre:    ${datos.nombre}<p>
             <p>Cedula:    ${datos.cedula}<p>
             <p>Telefono:    ${datos.telefono}<p>
             <p>Direccion:    ${datos.direccion}<p>
             </table>
             </fieldset>
             <button class="btn-delete" data-id="${doc.id}"> Borrar </button>
             <button class="btn-edit" data-id="${doc.id}"> Editar </button>
            `
        })

    tasksContainer1.innerHTML = html



    const btnsDelete = tasksContainer1.querySelectorAll(".btn-delete")
    btnsDelete.forEach(btn => {
        btn.addEventListener(`click`, ({target: {dataset}}) => {
            deleteTask1(dataset.id)
        })
    })

    const btnsEdit = tasksContainer1.querySelectorAll('.btn-edit')
    btnsEdit.forEach(btn => {
        btn.addEventListener(`click`, async ({target: {dataset}}) => {
            const doc = await getOnlyTask1(dataset.id)
            const datos = doc.data()

            taskForm['datos-nombre'].value = datos.nombre
            taskForm['datos-cedula'].value = datos.cedula
            taskForm['datos-telefono'].value = datos.telefono
            taskForm['datos-direccion'].value = datos.direccion

            Editar = true;
            id = doc.id

            taskForm['btn-datos-entregar'].innerText = 'Actualizar'
        })
    })
})
})

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = taskForm['datos-nombre'];
    const cedula = taskForm['datos-cedula'];
    const telefono = taskForm['datos-telefono'];
    const direccion = taskForm['datos-direccion'];

    if (!Editar) {
        saveTask1(nombre.value, cedula.value, telefono.value, direccion.value);
    } else {
        updateTask1(id, {
            nombre: nombre.value,
            cedula: cedula.value,
            telefono: telefono.value,
            direccion: direccion.value
        })

        Editar = false;
        taskForm['btn-datos-entregar'].innerText = 'Entregar'
    }

    taskForm.reset()
})

// SEGUNDA COLECCIÓN //

let Editar2 = false;

window.addEventListener('DOMContentLoaded', async () => {
    
   onGetTasks2((querySnapshot)=> {
        let html2 = ''
        let i2 = 1
        querySnapshot.forEach(doc => {
            const lista = doc.data();
            html2 += `
            <div class="DatosRegistrados">
             <div class="datos">
             <p class="actualizacion">${i2++}<p>
             <div class="datos2">
             <h2> Lista: </h2>
             <fieldset> 
             <table>       
             <p>¿Qué hay que hacer?:    ${lista.lista}<p>
             <p>Fecha máxima:    ${lista.fecha}<p>
             <p>Dificultad:    ${lista.dificultad}<p>
             <p>Notas extras:    ${lista.extra}<p>
             </table>
             </fieldset>
             <button class="btn-delete-lista" data-id="${doc.id}"> Borrar </button>
             <button class="btn-edit-lista" data-id="${doc.id}"> Editar </button>
            `
        })

    tasksContainer2.innerHTML = html2



    const btnsDeleteLista = tasksContainer2.querySelectorAll(".btn-delete-lista")
    btnsDeleteLista.forEach(btn => {
        btn.addEventListener(`click`, ({target: {dataset}}) => {
            deleteTask2(dataset.id)
        })
    })

    const btnsEditLista = tasksContainer2.querySelectorAll('.btn-edit-lista')
    btnsEditLista.forEach(btn => {
        btn.addEventListener(`click`, async ({target: {dataset}}) => {
            const doc = await getOnlyTask2(dataset.id)
            const lista = doc.data()

            taskForm2['lista-lista'].value = lista.lista
            taskForm2['lista-fecha'].value = lista.fecha
            taskForm2['lista-dificultad'].value = lista.dificultad
            taskForm2['lista-extra'].value = lista.extra

            Editar2 = true;
            id = doc.id

            taskForm2['btn-datos-entregar2'].innerText = 'Actualizar'
        })
    })
})
})

taskForm2.addEventListener('submit', (e) => {
    e.preventDefault();

    const lista = taskForm2['lista-lista'];
    const fecha = taskForm2['lista-fecha'];
    const dificultad = taskForm2['lista-dificultad'];
    const extra = taskForm2['lista-extra'];

    if (!Editar2) {
        saveTask2(lista.value, fecha.value, dificultad.value, extra.value);
    } else {
        updateTask2(id, {
            lista: lista.value,
            fecha: fecha.value,
            dificultad: dificultad.value,
            extra: extra.value
        })

        Editar2 = false;
        taskForm2['btn-datos-entregar2'].innerText = 'Entregar'
    }

    taskForm2.reset()
})

// TERCERA COLECCIÓN //


let Editar3 = false;

window.addEventListener('DOMContentLoaded', async () => {
    
   onGetTasks3((querySnapshot)=> {
        let html3 = ''
        let i3 = 1
        querySnapshot.forEach(doc => {
            const libros = doc.data();
            html3 += `
            <div class="DatosRegistrados">
             <div class="datos">
             <p class="actualizacion">${i3++}<p>
             <div class="datos2">
             <h2> Libro Número "${i3-1}" guardado: </h2>
             <fieldset> 
             <table>       
             <p>Nombre:    ${libros.nombre}<p>
             <p>Fecha de Publicación:    ${libros.fecha}<p>
             <p>Autor:    ${libros.autor}<p>
             <p>Genero:    ${libros.genero}<p>
             <p>Tema:    ${libros.tema}<p>
             </table>
             </fieldset>
             <button class="btn-delete-libro" data-id="${doc.id}"> Borrar </button>
             <button class="btn-edit-libro" data-id="${doc.id}"> Editar </button>
            `
        })

    tasksContainer3.innerHTML = html3;



    const btnsDeleteLibro = tasksContainer3.querySelectorAll(".btn-delete-libro")
    btnsDeleteLibro.forEach(btn => {
        btn.addEventListener(`click`, ({target: {dataset}}) => {
            deleteTask3(dataset.id)
        })
    })

    const btnsEditLibro = tasksContainer3.querySelectorAll('.btn-edit-libro')
    btnsEditLibro.forEach(btn => {
        btn.addEventListener(`click`, async ({target: {dataset}}) => {
            const doc = await getOnlyTask3(dataset.id)
            const libros = doc.data()

            taskForm3['libros-nombre'].value = libros.nombre
            taskForm3['libros-fecha'].value = libros.fecha
            taskForm3['libros-autor'].value = libros.autor
            taskForm3['libros-genero'].value = libros.genero
            taskForm3['libros-tema'].value = libros.tema

            Editar3 = true;
            id = doc.id

            taskForm3['btn-datos-entregar3'].innerText = 'Actualizar'
        })
    })
})
})

taskForm3.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = taskForm3['libros-nombre'];
    const fecha = taskForm3['libros-fecha'];
    const autor = taskForm3['libros-autor'];
    const genero = taskForm3['libros-genero'];
    const tema = taskForm3['libros-tema'];

    if (!Editar3) {
        saveTask3(nombre.value, fecha.value, autor.value, genero.value, tema.value);
    } else {
        updateTask3(id, {
            nombre: nombre.value,
            fecha: fecha.value,
            autor: autor.value, 
            genero: genero.value, 
            tema: tema.value
        })

        Editar3 = false;
        taskForm3['btn-datos-entregar3'].innerText = 'Entregar'
    }

    taskForm3.reset()
})
    