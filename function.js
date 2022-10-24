//todo lo del header
const headSave = document.getElementById('headSave');
const btnGuardar = document.getElementById('btnGuardar');
const inputTarea = document.getElementById('inputTarea');
const form = document.getElementById('form');

//las opciones de busqueda
const mainOptions = document.getElementById('mainOptions')

//articulo
const getTareaOne = document.getElementById('getTareaOne');
const makeTarea = document.getElementById('makeTarea');
const btnBorrar = document.getElementById('btnBorrar')

const tasks = document.querySelector('.tasks')
const btnSearch = document.getElementById('btnSearch');
pintarTareas();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTarea = {
        id: arrTareas.length + 1,
        titulo: inputTarea.value,
        prioridad: headSave.value,
    }
    arrTareas.push(newTarea);
    localStorage.setItem('tasks', JSON.stringify(arrTareas));
    pintarTareas();
});


function pintarTareas() {
    let tasksHtml = '';
    for (let _tarea of arrTareas) {
        let color = '';
        if (_tarea.prioridad === ('urgente')) {
            color = 'urgente';
        }
        else if (_tarea.prioridad === ('diaria')) {
            color = 'diaria';
        }
        else if (_tarea.prioridad === ('semanal')) {
            color = 'semanal';
        }
        else if (_tarea.prioridad === ('mensual')) {
            color = 'mensual';
        }
        tasksHtml += `<section class="${color}">
        <article>
            <h2>${_tarea.titulo}</h2>
            <button id="${_tarea.id}" class="deleteButton">BORRAR</button>
        </article>
        </section>`;
    }
    tasks.innerHTML = tasksHtml;
    const deleteButton = document.querySelectorAll('.deleteButton');
    for (const button of deleteButton) {
        button.addEventListener('click', event => {
            event.preventDefault();
            const index = arrTareas.findIndex(tarea => tarea.id === parseInt(event.target.id));
            arrTareas.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(arrTareas));
            pintarTareas();
        });
    }
}
