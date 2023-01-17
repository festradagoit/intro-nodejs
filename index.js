const validator = require("validator");
const greeter = require("./greeter");
const { functionTwo, functionOne } = require("./libreria");
// import { functionOne, functionTwo } from "./libreria";
// import generalFunction from "./libreria.js";

// // REPL (read-eval-print loop)
// const a = 8;
// const b = 6;

// console.log(a + b);

const validateEmail = (cadena) => {
  return validator.isEmail(cadena);
};

let a = "dfghguhkvkjkbh";
let b = "https://google.com";
let c = "otracosa@undominio";
let d = "otracosa@undominio.com";

console.log(a, validateEmail(a));
console.log(b, validateEmail(b));
console.log(c, validateEmail(c));
console.log(d, validateEmail(d));

greeter.hello();
greeter.bye();

//  ECMAScript Modules (ESM)

// por medio de la palabra clave export en un documento ej libreria.js (ver documento libreria.js) exporté las funciones
// functionOne y functionTwo usando la palabra export

// en este documento index.js se han importado las funciones por medio de la sintaxis const { functionTwo, functionOne } = require("./libreria");

functionOne();
functionTwo();
