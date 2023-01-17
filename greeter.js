const helloMesage = "Hola!";
const goodByeMesage = "Adios!";

const hello = () => console.log(helloMesage);
const bye = () => goodByeMesage;

module.exports = {
  hello,
  bye,
};

console.log("soy el console del greeter.js");
