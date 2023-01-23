// Web Storage API

// localStorage => no se borra aunque cierre la ventana / navegador.
// sessionStorage => se borra cuando la pestaña se cierra.

// setItem(key, value) - Crea un nuevo registro o actualiza el ya existente en el almacenamiento
// getItem(key) - Devuelve un valor con clave del almacenamiento key.
// removeItem(key) - Elimina el registro con la clave del almacenamiento key.
// clear() - Elimina completamente todas las entradas del almacenamiento
// length - Guarda el número de registros en el almacenamiento

// const sessionbtn = document.getElementById("session");

// sessionbtn.addEventListener("click", function () {
//   //   sessionStorage.clear();
//   sessionStorage.removeItem("token1");
//   //   console.log("clic");
// });

const obj2 = {
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

// sessionStorage.setItem("token1", "dfghjklñ");
// sessionStorage.setItem("token2", "12345dfghjklñ");

// para session storage

// const stringifiedObj2 = JSON.stringify(obj2);

// sessionStorage.setItem("tk", stringifiedObj2);
// sessionStorage.setItem("nombre-de-llave2", stringifiedObj2);

// const objFromSessionStorage = sessionStorage.getItem("nombre-de-llave");

// console.log(
//   "objeto traido de session storage parseado",
//   JSON.parse(objFromSessionStorage)
// );

// console.log(objFromSessionStorage, objFromSessionStorage.name);
// console.log(obj2, obj2.name);

//------------------

// para session storage

// const stringifiedObj3 = JSON.stringify(obj2);

// localStorage.setItem("otro-nombre-de-llave", stringifiedObj3);

// const objFromSessionStorage2 = sessionStorage.getItem("nombre-de-llave");

// console.log(
//   "objeto traido de session storage parseado",
//   JSON.parse(objFromSessionStorage2)
// );

// console.log(objFromSessionStorage, objFromSessionStorage.name);
// console.log(obj2, obj2.name);

// ---

const save = (key, value) => {
  try {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  } catch (error) {
    console.log(error.name, error.message);
  }
};

const load = (key) => {
  try {
    const stringifiedValue = localStorage.getItem(key);

    return stringifiedValue !== null ? JSON.parse(stringifiedValue) : undefined;
  } catch (error) {
    console.log(error.name, error.message);
  }
};

// save("obj2", obj2);

console.log(load("obj2"));
