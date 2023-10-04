
const personas = [];

const formulario = document.getElementById("miFormulario");

function obtenerInteres(cuotasCliente) {
    let cuotas = cuotasCliente / 12;
    let interes = 0;

    if (cuotas > 0 && cuotas <= 2) {
        interes = 1.3;
    } else if (cuotas > 2 && cuotas <= 4) {
        interes = 1.5;
    } else if (cuotas > 4 && cuotas <= 5) {
        interes = 1.8;
    }

    return interes;
}

function dineroConInteres(dinero, interes) {
    const decimales = 0;
    dinero = Number(dinero);
    let dineroConInteres = dinero * interes;
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

const saveCreditoStorage = (infoPersona) => {
    localStorage.setItem('infoPersona', JSON.stringify(infoPersona));
};

const showCredito = () => {
    const div = document.createElement("div");

    const resultado2 = document.getElementById("resultado2");
    resultado2.innerHTML = '';

    personas.forEach(infoPersona => {
        const numero = Number(infoPersona.dineroFinalAPagar) || 0;
        const numCuotas = Number(infoPersona.cantidadCuotas) || 0;
        const valorCuotaMensual = Number(infoPersona.cuotaMensual) || 0;
        const opciones = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        const numeroFormateado = numero.toLocaleString('es-ES', opciones) || 0;
        const valorCuotaMensualFormateado = valorCuotaMensual.toLocaleString('es-ES', opciones) || 0;

        div.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${infoPersona.nombre} <br>
                    <strong>Rut :</strong> ${infoPersona.rut} <br>
                    <strong>Dinero total a pagar: </strong> ${numeroFormateado} <br>
                    <strong>${numCuotas} cuotas de : </strong> ${valorCuotaMensualFormateado}  cada una. <br>
                    <button href="#" class="btn btn-danger" id="${infoPersona.id}" name="delete">Borrar</button>
                </div>
            </div>
        `;
    });
    div.querySelectorAll('button[name="delete"]').forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.id;
            deleteCredito(id);
        });
    });

    resultado2.appendChild(div);
};

const deleteCredito = (id) => {
    personas.forEach((infoPersona, index) => {
        if (infoPersona.id === id) {
            personas.splice(index, 1);
        }
    });

    localStorage.setItem('personas', JSON.stringify(personas));

    showCredito();
};

const simularCredito = () => {
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const renta = document.getElementById("renta").value;
    const cuotas = document.getElementById("cuotas").value;
    const dineroASolicitar = document.getElementById("dineroASolicitar").value;

    if (!isNaN(cuotas) && !isNaN(dineroASolicitar)) {
        let infoPersona = {
            id: getRandomId(),
            rut: rut || "N/A",
            nombre: nombre || "N/A",
            correo: correo || "N/A",
            renta: renta || "N/A",
            cantidadCuotas: obtenerCuotas(cuotas),
            dineroSolicitar: dineroASolicitar || "N/A",
        };


        infoPersona.interes = obtenerInteres(infoPersona.cantidadCuotas) || 0;
        infoPersona.dineroFinalAPagar = dineroConInteres(infoPersona.dineroSolicitar, infoPersona.interes) || 0;
        infoPersona.cuotaMensual = cuotaMensual(infoPersona.dineroFinalAPagar, infoPersona.cantidadCuotas) || 0;

        if (!isNaN(infoPersona.dineroFinalAPagar) || !isNaN(infoPersona.cuotaMensual)) {


            personas.push(infoPersona);

            const numero = Number(infoPersona.dineroFinalAPagar) || 0;
            const numCuotas = Number(infoPersona.cantidadCuotas) || 0;
            const valorCuotaMensual = Number(infoPersona.cuotaMensual) || 0;
            const opciones = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
            const numeroFormateado = numero.toLocaleString('es-ES', opciones) || 0;
            const valorCuotaMensualFormateado = valorCuotaMensual.toLocaleString('es-ES', opciones) || 0;
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `
        <h1>Total a pagar: ${numeroFormateado}</h1>
        <h2>Cuotas: ${numCuotas}</h2>
        <h2>Valor Cuota mensual: ${valorCuotaMensualFormateado}</h2>
    `;


            saveCreditoStorage(personas);


            showCredito();
            formulario.reset();
        } else {
            alert(" Debe ingresar datos válidos númericos válidos");
        }
    } else {
        alert(" Debe ingresar datos válidos");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("btnPrincipal");
    boton.addEventListener("click", simularCredito);
});
