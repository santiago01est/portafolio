// Import our custom CSS
//import '../styles/main.css'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'
import { valida } from "./validaciones.js";


function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

/*
VALIDACIONES   
*/

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});