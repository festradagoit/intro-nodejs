// export const functionOne = () => {
//     //  llamar a un servidor /.../
//     // intercambiar mayusculas por minusculas
//     // sumar los numeros impares primos del 1 al 1000

//     return console.log("terminé");
//   };

// export const functionTwo = () => {
//     //  llamar a un servidor /.../
//     // intercambiar minusculas por mayusculas
//     // sumar los numeros pares primos del 1 al 1000

//     return console.log("terminé también");
//   };

// export default function generalFunction() {
//   //... otras actividades
//   return console.log("termine otra vez");
// }

// todo lo de arriba aplica unicamente para ESM Modules y no Common JS
// ********

const functionOne = () => {
  //  llamar a un servidor /.../
  // intercambiar mayusculas por minusculas
  // sumar los numeros impares primos del 1 al 1000

  return console.log("terminé");
};

const functionTwo = () => {
  //  llamar a un servidor /.../
  // intercambiar minusculas por mayusculas
  // sumar los numeros pares primos del 1 al 1000

  return console.log("terminé también");
};

module.exports = {
  functionOne,
  functionTwo,
};
