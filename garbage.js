import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');

// class Pessoa {
//   constructor(primeiroNome, ultimoNome, idade) {
//     this.primeiroNome = primeiroNome;
//     this.ultimoNome = ultimoNome;
//     this.idade = idade;
//   }
//   nomeCompleto() {
//     return this.primeiroNome + " " + this.ultimoNome;
//   }
// }

// let antonio = new Pessoa("Antônio", "Silva", 55);
// console.log(antonio);
// console.log(antonio.nomeCompleto());

// for (const key in antonio) {
//   console.log(`
//   key  : ${key}
//   value: ${antonio[key]}`);
// }

// const objTeste = {
//   a: 1,
//   b: "teste",
// };

// console.log(objTeste);
// console.log(objTeste.propertyIsEnumerable("a"));

// //
// //
// //

// Object.prototype.objCustom = function () {};
// Array.prototype.arrCustom = function () {};

// const iterable = [3, 5, 7];
// iterable.foo = "hello";

// for (const i in iterable) {
//   console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
// }
// console.log();

// for (const i in iterable) {
//   if (Object.hasOwn(iterable, i)) {
//     console.log(i); // logs "0", "1", "2", "foo"
//   }
// }
// console.log();

// for (const i of iterable) {
//   console.log(i); // logs 3, 5, 7
// }

//
// localStorage
//

localStorage.setItem('myCat', 'Tom');
console.log(localStorage.getItem('myCat'));















