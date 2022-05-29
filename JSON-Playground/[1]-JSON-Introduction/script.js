// Way - 1 to access JSON

// const jsonData = require("./intro.json");
// console.log(jsonData);

// Way - 2 to access JSON

fetch("./intor.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => console.log(jsondata));
