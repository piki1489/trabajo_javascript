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





const btnSearch = document.getElementById('btnSearch');

pintarTareas();



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTarea = {
        titulo: inputTarea.value,
        prioridad: headSave.value,
    }
    arrTareas.push(newTarea);

});






function pintarTareas() {
    getTareaOne.innerHTML = '';

    for (let _tarea of arrTareas) {
        const article = document.createElement('article');
        if (_tarea.prioridad === ('ugente')) {
            article.classList.add('urgente');

        } else if (_tarea.prioridad === ('diaria')); {
            article.classList.add('diaria');
        }
        if (_tarea.prioridad === ('semanal')) {
            article.classList.add('semanal');
        }

        else if (_tarea.prioridad === ('mensual')) {
            article.classList.add('mensual');
        }
        getTareaOne.append(article)

    }
}


//         const h2Tarea = document.createElement('h2');
//         h2Tarea.innerText = `${_tarea.titulo}`


//         const btnBorrar = document.createElement('button');
//         btnBorrar.innerText = 'Borrar';
//         btnBorrar.addEventListener('click', (event) => {
//             event.target.parentNode.remove();
//         });

//         article.append(h2Tarea, btnBorrar);
//         getTareaOne.append(article)
//     }
// }
//             // // arrClientes = arrClientes.filter((cli) => {
            //     return cli.email !== cliente.email;
            // });


// function pintarTareas() {
//     mainOptions.innerHTML = '';
//     for (let tareas of arrTareas) {
//         const article = document.createElement('article');

//         const h2Tarea = document.createElement('h2');
//         h2Tarea.innerHTML = `${tarea.titulo} `
//         // ${tarea.prioridad};

//         const mainOptions = document.createElement('button')
//         article.append(h2Tarea, mainOptions)

//         save.append(article)
//     }
// }