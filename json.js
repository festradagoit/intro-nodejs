// JSON (JavaScript Object Notation)

let obj1 = {
  property1: "some description",
  id: 1,
  calltoApi: function () {
    console.log("greet");
  },
  elements: ["1", "2", "3", 4],
};

function foo() {
  //---
}

let frase = "something with spaces and written as string";

export const obj2 = {
  name: "Josh",
  weight: 175,
  age: 30,
  eyecolor: "brown",
  isHappy: true,
  cars: ["Chevy", "Honda"],
  favoriteBook: {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
};

// JSON.stringify()

const ob1strigified = JSON.stringify(obj1);
const ob2stringiefied = JSON.stringify(obj2);

// console.log(ob1strigified);
// console.log(ob2stringiefied);

// console.log(JSON.stringify(foo)); => la conversion de un metodo retorna undefined

// console.log(
//   "este seria el resultado de convertir una cadena de texto",
//   JSON.stringify(frase)
// );

// JSON.parse()  proceoso de conversion de una cadena JSON a objeto de javascript

//----------

let string1 =
  '{"property1": "some description","id": 1,"elements": ["1", "2", "3", 4]}';

let convertString1ToObj = JSON.parse(string1);

// console.log(
//   "resultado de conversion de cadena JSON a obj de javascript",
//   ".....",
//   convertString1ToObj,
//   ".....",
//   JSON.stringify(obj1),
//   "...."
// );

// console.log("crear un mensaje", "puedo tener un segundo mensaje", obj1, );

// try & catch

//
//
//

console.log("inicio del programa");

// const data = JSON.parse("Well, this is awkward");

try {
  //... intenta ejecutar los comandos en este bloque.
  //   console.log(
  //     "estoy en el bloque try y como no hay errores el catch no se ejecutará"
  //   );
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  //... ejecuta lo que esta en el catch si aparece algun error dentro del bloque try
  console.log("mensaje adicional dentro del bloque error");
  console.log(error.name, error.message);
}

console.log("este es el siguiente comando");

console.log("fin del programa");
