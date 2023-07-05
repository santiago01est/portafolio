export function valida(input) {
    const tipoDeInput = input.dataset.tipo;


    if (input.validity.valid) {
        input.parentElement.classList.remove("form-group--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarnada();
    } else {
        input.parentElement.classList.add("form-group--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, input);
    }
}

function mostrarnada() {
console.log("nada");
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    number: {
        valueMissing: "El campo número no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    }

};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}
  /**
const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};
 

 
function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }
 
  input.setCustomValidity(mensaje);
}
 
function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
*/