
const personas = [];

const miFormulario = document.getElementById("miFormulario");


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
};

function dineroConInteres(dinero, interes) {
    const decimales = 0;
    dinero = Number(dinero);
    let dineroConInteres = dinero * interes;
    dineroConInteres = dineroConInteres.toFixed(decimales);
    return dineroConInteres;
};

function cuotaMensual(dineroFinal, cuotas) {
    const decimales = 0;
    let cuotaMensual = dineroFinal / cuotas;
    cuotaMensual = cuotaMensual.toFixed(decimales);
    return cuotaMensual;
};

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
};

function comparaRenta(cuotaMensual, renta) {
    let pocenRenta = renta * 0.4;
    let evaluacion = ""

    if (pocenRenta >= cuotaMensual) {
        evaluacion = true;
    } else {
        evaluacion = false;
    }
    return evaluacion;

};

function sonNumeros(renta, cuota, dineroSolicitar) {
    let sonNumeros = false;
    renta = !isNaN(renta) ? renta != 0 ? true : false : false;
    cuota = !isNaN(cuota) ? cuota != 0 ? true : false : false;
    dineroSolicitar = !isNaN(dineroSolicitar) ? dineroSolicitar != 0 ? true : false : false;

    if (renta && cuota && dineroSolicitar) {
        sonNumeros = true;
    };
    return sonNumeros
};

const getRandomId = () => {
    return Math.floor(Math.random() * Date.now()).toString(16)
};

const saveCreditoStorage = (infoPersona) => {
    localStorage.setItem('infoPersona', JSON.stringify(infoPersona));
};

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
    const data = await response.text();
    return data;
};


const showCredito = () => {
    const div = document.createElement("div");

    const resultado2 = document.getElementById("resultado2");
    resultado2.innerHTML = '';
    personas.forEach(infoPersona => {
        const numero = Number(infoPersona.dineroFinalAPagar) || 0;
        const numCuotas = Number(infoPersona.cantidadCuotas) || 0;
        const valorCuotaMensual = Number(infoPersona.cuotaMensual) || 0;
        const dineroASolicitar = Number(infoPersona.dineroSolicitar) || 0;
        const opciones = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        const dineroASolicitarFormateado = dineroASolicitar.toLocaleString('es-ES', opciones) || 0;
        const numeroFormateado = numero.toLocaleString('es-ES', opciones) || 0;
        const valorCuotaMensualFormateado = valorCuotaMensual.toLocaleString('es-ES', opciones) || 0;

        div.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${infoPersona.nombre} <br>
                    <strong>Rut :</strong> ${infoPersona.rut} <br>
                    <strong>Dinero solicitado: </strong> ${dineroASolicitarFormateado} <br>
                    <strong>Dinero total a pagar: </strong> ${numeroFormateado} <br>
                    <strong>${numCuotas} cuotas de : </strong> ${valorCuotaMensualFormateado}  cada una. <br>
                    <button href="#" class="btn btn-danger" id="${infoPersona.id}" name="delete">Borrar</button>
                    <button href="#" class="btn btn-success" id="${infoPersona.id}" name="enviar">Enviar</button>
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
    div.querySelectorAll('button[name="enviar"]').forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.id;
            const infoPersona = personas.find(persona => persona.id === id);
            console.log()

            const body = {
                service_id: 'service_ach3741',
                template_id: 'template_dp296sq',
                user_id: 'rbkG3MseTcB1Zl42T',
                template_params: {
                    'from_name': infoPersona.correo,
                    'nombreMail': infoPersona.nombre,
                    'dineroSolicitadoMail': infoPersona.dineroSolicitar,
                    'dineroFinalMail': infoPersona.dineroFinalAPagar,
                    'numeroCuotasFinal': infoPersona.cantidadCuotas,
                    'cuotaFinalMail': infoPersona.cuotaMensual,
                }
            };
            sendEmail(body)
                .then(response => console.log(response.text()))
                .catch(error => {
                    console.log(error);
                });
            Toastify({

                text: "Enviado",

                duration: 3000

            }).showToast();

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



const simularCredito = async () => {

    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const renta = document.getElementById("renta").value;
    const cuotas = document.getElementById("cuotas").value;
    const dineroASolicitar = document.getElementById("dineroASolicitar").value;


    document.getElementById('rut').style.borderColor = '';
    document.getElementById('nombre').style.borderColor = '';
    document.getElementById('correo').style.borderColor = '';
    document.getElementById('renta').style.borderColor = '';
    document.getElementById('cuotas').style.borderColor = '';
    document.getElementById('dineroASolicitar').style.borderColor = '';


    if (rut.trim() === '') {
        document.getElementById('rut').style.borderColor = 'red';
        // const rutInput = document.getElementById("rutInput");
        // rutInput.innerHTML = `<br>
        //         <span>Debe ingresar su rut de forma correcta</span> `

    } else {
        document.getElementById('rut').style.borderColor = '';

    };

    if (nombre.trim() === '') {
        document.getElementById('nombre').style.borderColor = 'red';


    } else {
        document.getElementById('nombre').style.borderColor = '';
    }

    if (correo.trim() === '') {
        document.getElementById('correo').style.borderColor = 'red';

    } else {
        document.getElementById('correo').style.borderColor = '';
    }

    if (renta.trim() === '') {
        document.getElementById('renta').style.borderColor = 'red';

    } else {
        document.getElementById('renta').style.borderColor = '';
    }

    if (cuotas.trim() === '') {
        document.getElementById('cuotas').style.borderColor = 'red';

    } else {
        document.getElementById('cuotas').style.borderColor = '';
    }

    if (dineroASolicitar.trim() === '') {
        document.getElementById('dineroASolicitar').style.borderColor = 'red';

    } else {
        document.getElementById('dineroASolicitar').style.borderColor = '';

    }

    // console.log(sonNumeros(renta, cuotas, dineroASolicitar)) 
    // console.log(rut.trim() != '') 
    // console.log(nombre.trim())
    // console.log(correo.trim())

    if (sonNumeros(renta, cuotas, dineroASolicitar) && rut.trim() != '' && nombre.trim() != '' && correo.trim() != '') {
        let infoPersona = {
            id: getRandomId(),
            rut: rut,
            nombre: nombre,
            correo: correo,
            renta: renta,
            cantidadCuotas: cuotas ? obtenerCuotas(cuotas) : cuotas,
            dineroSolicitar: dineroASolicitar,
        };

        infoPersona.interes = obtenerInteres(infoPersona.cantidadCuotas);
        infoPersona.dineroFinalAPagar = dineroConInteres(infoPersona.dineroSolicitar, infoPersona.interes);
        infoPersona.cuotaMensual = cuotaMensual(infoPersona.dineroFinalAPagar, infoPersona.cantidadCuotas);
        let evaluacionSimular = comparaRenta(infoPersona.cuotaMensual, infoPersona.renta);

        if (evaluacionSimular) {

            personas.push(infoPersona);

            const numero = Number(infoPersona.dineroFinalAPagar) || 0;
            const numCuotas = Number(infoPersona.cantidadCuotas) || 0;
            const valorCuotaMensual = Number(infoPersona.cuotaMensual) || 0;
            const dineroASolicitar = Number(infoPersona.dineroSolicitar) || 0;
            const opciones = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
            const dineroASolicitarFormateado = dineroASolicitar.toLocaleString('es-ES', opciones) || 0;
            const numeroFormateado = numero.toLocaleString('es-ES', opciones) || 0;
            const valorCuotaMensualFormateado = valorCuotaMensual.toLocaleString('es-ES', opciones) || 0;
            const resultado = document.getElementById("resultado");

            resultado.innerHTML = `
        <h1>Dinero solicitado : ${dineroASolicitarFormateado}</h1>        
        <h1>Total a pagar: ${numeroFormateado}</h1>
        <h2>Cuotas: ${numCuotas}</h2>
        <h2>Valor Cuota mensual: ${valorCuotaMensualFormateado}</h2>
    `
            saveCreditoStorage(personas);
            showCredito();
        } else {

            Swal.fire({
                title: 'Error!',
                text: 'Su cuota mensual no debe superar el 40% de su renta',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
        };
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Debe ingresar todos los datos solicitados, información del cliente y datos del crédito a solicitar',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    };
};

document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("btnPrincipal");
    boton.addEventListener("click", simularCredito);
});
