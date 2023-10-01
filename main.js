
// function obtenerInteres(cuotasCliente) {
//     let cuotas = cuotasCliente / 12;
//     let interes = "";
//     if (cuotas > 0 && cuotas <= 2) {
//         interes = 0.3;
//     } else if (cuotas > 2 && cuotas <= 4) {
//         interes = 0.5;
//     } else if (cuotas > 4 && cuotas <= 5) {
//         interes = 0.8
//     };
//     return interes;
// };

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
//     let cantidaCuotas = "";
//     if (cuotas <= 6) {
//         cantidaCuotas = 6;
//     } else if (cuotas > 6 && cuotas <= 12) {
//         cantidaCuotas = 12;
//     } else if (cuotas > 12 && cuotas <= 24) {
//         cantidaCuotas = 24;
//     } else if (cuotas > 24 && cuotas <= 36) {
//         cantidaCuotas = 36;
//     } else if (cuotas > 36 && cuotas <= 48) {
//         cantidaCuotas = 48;
//     } else if (cuotas > 48 && cuotas <= 60) {
//         cantidaCuotas = 60;
//     }
//     return cantidaCuotas;

// }
// const simularCredito = () => {
//     const rut = document.getElementById("rut").value;
//     const nombre = document.getElementById("nombre").value;
//     const correo = document.getElementById("correo").value;
//     const renta = document.getElementById("renta").value;
//     const cuotas = document.getElementById("cuotas").value;
//     const dineroASolicitar = document.getElementById("dineroASolicitar").value;

//     let personas = [];


//     let infoPersona = {
//         rut: "",
//         nombre: "",
//         correo: "",
//         renta: "",
//         cantidaCuotas: "",
//         dineroSolicitar: "",
//         interes: "",
//         dineroFinalAPagar: "",
//         cuotaMensual: ""
//     };

//     infoPersona.rut = rut ? rut : "N/A";
//     infoPersona.nombre = nombre ? nombre : "N/A";
//     infoPersona.correo = correo ? correo : "N/A";
//     infoPersona.renta = renta ? renta : "N/A";
//     infoPersona.cantidaCuotas = obtenerCuotas(cuotas);
//     infoPersona.dineroSolicitar = dineroASolicitar ? dineroASolicitar : "N/A";
//     infoPersona.interes = obtenerInteres(infoPersona.cantidaCuotas);
//     infoPersona.dineroFinalAPagar = dineroConInteres(infoPersona.dineroSolicitar, infoPersona.interes);
//     infoPersona.cuotaMensual = cuotaMensual(infoPersona.dineroFinalAPagar, infoPersona.cantidaCuotas);

//     console.log(infoPersona);
//     personas.push(infoPersona);

//     const resultado = document.getElementById("resultado");
//     resultado.innerHTML = "<h1>" + "Total a pagar: " + infoPersona.dineroFinalAPagar + "</h1>" + "\n"
//         + "<h2>" + "Cuotas : " + infoPersona.cantidaCuotas + "</h2>" + "\n"
//         + "<h2>" + "Valor Cuota mensual : " + infoPersona.cuotaMensual + "</h2>" + "\n"
// }

// let boton = document.getElementById("btnPrincipal");
// boton.addEventListener("click", simularCredito);

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

const simularCredito = () => {
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const renta = document.getElementById("renta").value;
    const cuotas = document.getElementById("cuotas").value;
    const dineroASolicitar = document.getElementById("dineroASolicitar").value;

    let personas = [];

    let infoPersona = {
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

    console.log(infoPersona);
    personas.push(infoPersona);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h1>Total a pagar: ${infoPersona.dineroFinalAPagar}</h1>
        <h2>Cuotas: ${infoPersona.cantidadCuotas}</h2>
        <h2>Valor Cuota mensual: ${infoPersona.cuotaMensual}</h2>
    `;
};

document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("btnPrincipal");
    boton.addEventListener("click", simularCredito);
});
