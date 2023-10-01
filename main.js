
// const personas = [];

// const formulario = document.getElementById("miFormulario");


// function obtenerInteres(cuotasCliente) {
//     let cuotas = cuotasCliente / 12;
//     let interes = 0;

//     if (cuotas > 0 && cuotas <= 2) {
//         interes = 0.3;
//     } else if (cuotas > 2 && cuotas <= 4) {
//         interes = 0.5;
//     } else if (cuotas > 4 && cuotas <= 5) {
//         interes = 0.8;
//     }

//     return interes;
// }

// function dineroConInteres(dinero, interes) {
//     const decimales = 0;
//     dinero = Number(dinero);
//     let dineroConInteres = dinero + (dinero * interes);
//     dineroConInteres = dineroConInteres.toFixed(decimales);
//     return dineroConInteres;
// }

// function cuotaMensual(dineroFinal, cuotas) {
//     const decimales = 0;
//     let cuotaMensual = dineroFinal / cuotas;
//     cuotaMensual = cuotaMensual.toFixed(decimales);
//     return cuotaMensual;
// }

// function obtenerCuotas(cuotas) {
//     let cantidadCuotas = 6;

//     if (cuotas <= 6) {
//         cantidadCuotas = 6;
//     } else if (cuotas > 6 && cuotas <= 12) {
//         cantidadCuotas = 12;
//     } else if (cuotas > 12 && cuotas <= 24) {
//         cantidadCuotas = 24;
//     } else if (cuotas > 24 && cuotas <= 36) {
//         cantidadCuotas = 36;
//     } else if (cuotas > 36 && cuotas <= 48) {
//         cantidadCuotas = 48;
//     } else if (cuotas > 48 && cuotas <= 60) {
//         cantidadCuotas = 60;
//     }

//     return cantidadCuotas;
// }

// const getRandomId = () => {
//     return Math.floor(Math.random() * Date.now()).toString(16)
// };

// const saveTaskStorage = (infoPersona) => {
//     localStorage.setItem('infoPersona', JSON.stringify(infoPersona));

// };


// const showTasks = (infoPersona) => {
//     const div = document.createElement("div");

//     const resultado2 = document.getElementById("resultado2");
//     resultado2.innerHTML = '';

//     personas.forEach(infoPersona => {
//         div.innerHTML += `
//             <div class="card text-center mb-4">
//                 <div class="card-body">
//                     <strong>Nombre</strong>: ${infoPersona.nombre} -
//                     <strong>Dinero total a pagar: </strong>: ${infoPersona.dineroFinalAPagar}
//                     <button href="#" class="btn btn-danger" id="${infoPersona.id}" name="delete">Delete</button>
//                 </div>
//             </div>
//         `;
//     });
//     resultado2.appendChild(div);
// };

// const deleteTask = (id) => {
//     tasks.forEach((task, index) => {
//         if (task.id === id) {
//             tasks.splice(index, 1);
//         }
//     });
//     showTasks(tasks);

//     // Pisamos o actualizamos los valores del Storage
//     saveTaskStorage(tasks);
// };

// const simularCredito = () => {
//     const rut = document.getElementById("rut").value;
//     const nombre = document.getElementById("nombre").value;
//     const correo = document.getElementById("correo").value;
//     const renta = document.getElementById("renta").value;
//     const cuotas = document.getElementById("cuotas").value;
//     const dineroASolicitar = document.getElementById("dineroASolicitar").value;

//     let infoPersona = {
//         id: getRandomId(),
//         rut: rut || "N/A",
//         nombre: nombre || "N/A",
//         correo: correo || "N/A",
//         renta: renta || "N/A",
//         cantidadCuotas: obtenerCuotas(cuotas),
//         dineroSolicitar: dineroASolicitar || "N/A",
//     };

//     infoPersona.interes = obtenerInteres(infoPersona.cantidadCuotas);
//     infoPersona.dineroFinalAPagar = dineroConInteres(infoPersona.dineroSolicitar, infoPersona.interes);
//     infoPersona.cuotaMensual = cuotaMensual(infoPersona.dineroFinalAPagar, infoPersona.cantidadCuotas);


//     personas.push(infoPersona);

//     const resultado = document.getElementById("resultado");
//     resultado.innerHTML = `
//         <h1>Total a pagar: ${infoPersona.dineroFinalAPagar}</h1>
//         <h2>Cuotas: ${infoPersona.cantidadCuotas}</h2>
//         <h2>Valor Cuota mensual: ${infoPersona.cuotaMensual}</h2>
//     `;
//     saveTaskStorage(infoPersona);
//     showTasks();
//     formulario.reset();
// };





// //taskList.addEventListener('click', (e) => deleteTask(e.target.id));
// document.addEventListener("DOMContentLoaded", function () {
//     let boton = document.getElementById("btnPrincipal");
//     boton.addEventListener("click", simularCredito);
// });


const personas = [];

const formulario = document.getElementById("miFormulario");

function obtenerInteres(cuotasCliente) {
    let cuotas = cuotasCliente / 12;
    let interes = 0;

    if (cuotas > 0 && cuotas <= 2) {
        interes = 0.3;
    } else if (cuotas > 2 && cuotas <= 4) {
        interes = 0.5;
    } else if (cuotas > 4 && cuotas <= 5) {
        interes = 0.8;
    }

    return interes;
}

function dineroConInteres(dinero, interes) {
    const decimales = 0;
    dinero = Number(dinero);
    let dineroConInteres = dinero + (dinero * interes);
    dineroConInteres = dineroConInteres.toFixed(decimales);
    return dineroConInteres;
}

function cuotaMensual(dineroFinal, cuotas) {
    const decimales = 0;
    let cuotaMensual = dineroFinal / cuotas;
    cuotaMensual = cuotaMensual.toFixed(decimales);
    return cuotaMensual;
}

function obtenerCuotas(cuotas) {
    let cantidadCuotas = 6;

    if (cuotas <= 6) {
        cantidadCuotas = 6;
    } else if (cuotas > 6 && cuotas <= 12) {
        cantidadCuotas = 12;
    } else if (cuotas > 12 && cuotas <= 24) {
        cantidadCuotas = 24;
    } else if (cuotas > 24 && cuotas <= 36) {
        cantidadCuotas = 36;
    } else if (cuotas > 36 && cuotas <= 48) {
        cantidadCuotas = 48;
    } else if (cuotas > 48 && cuotas <= 60) {
        cantidadCuotas = 60;
    }

    return cantidadCuotas;
}

const getRandomId = () => {
    return Math.floor(Math.random() * Date.now()).toString(16)
};

const saveTaskStorage = (infoPersona) => {
    localStorage.setItem('infoPersona', JSON.stringify(infoPersona));
};

const showTasks = () => {
    const div = document.createElement("div");

    const resultado2 = document.getElementById("resultado2");
    resultado2.innerHTML = '';

    personas.forEach(infoPersona => {
        div.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${infoPersona.nombre} -
                    <strong>Dinero total a pagar: </strong>: ${infoPersona.dineroFinalAPagar}
                    <button href="#" class="btn btn-danger" id="${infoPersona.id}" name="delete">Delete</button>
                </div>
            </div>
        `;
    });
    div.querySelectorAll('button[name="delete"]').forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.id;
            deleteTask(id);
        });
    });

    resultado2.appendChild(div);
};

const deleteTask = (id) => {
    personas.forEach((infoPersona, index) => {
        if (infoPersona.id === id) {
            personas.splice(index, 1);
        }
    });

    localStorage.setItem('personas', JSON.stringify(personas));

    showTasks();
};

const simularCredito = () => {
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const renta = document.getElementById("renta").value;
    const cuotas = document.getElementById("cuotas").value;
    const dineroASolicitar = document.getElementById("dineroASolicitar").value;

    let infoPersona = {
        id: getRandomId(),
        rut: rut || "N/A",
        nombre: nombre || "N/A",
        correo: correo || "N/A",
        renta: renta || "N/A",
        cantidadCuotas: obtenerCuotas(cuotas),
        dineroSolicitar: dineroASolicitar || "N/A",
    };

    infoPersona.interes = obtenerInteres(infoPersona.cantidadCuotas);
    infoPersona.dineroFinalAPagar = dineroConInteres(infoPersona.dineroSolicitar, infoPersona.interes);
    infoPersona.cuotaMensual = cuotaMensual(infoPersona.dineroFinalAPagar, infoPersona.cantidadCuotas);

    personas.push(infoPersona);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h1>Total a pagar: ${infoPersona.dineroFinalAPagar}</h1>
        <h2>Cuotas: ${infoPersona.cantidadCuotas}</h2>
        <h2>Valor Cuota mensual: ${infoPersona.cuotaMensual}</h2>
    `;

   
    saveTaskStorage(personas);


    showTasks();
    formulario.reset();
};

document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("btnPrincipal");
    boton.addEventListener("click", simularCredito);
});
