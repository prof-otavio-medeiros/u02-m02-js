function showAllPropertyNamesAndTypes(obj) {
  console.log(`\n>>>>>>>>`);
  console.log(`>>>`);
  console.log(`>>>\n`);
  console.log(`>>> obj.name:\n`);
  console.log(obj.name);
  console.log(`\n>>> typeof obj:\n`);
  console.log(typeof obj);
  console.log(`\n>>> obj:\n`);
  console.log(`${obj}`);
  console.log();
  var props = [];
  do {
    Object.getOwnPropertyNames(obj).forEach(function (prop) {
      if (props.length === 0) {
        props.push([prop, typeof prop]);
      } else {
        if (!props.some((elem) => elem[0] === prop)) {
          props.push([prop, typeof prop]);
        }
      }
    });
  } while ((obj = Object.getPrototypeOf(obj)));
  console.log(`>>> props: \n`);
  console.log(props.sort());
  console.log(`\n<<<`);
  console.log(`<<<`);
  console.log(`<<<<<<<<\n`);
}

//
// Named Function Declaration
//

function somaNamedFunctionDeclaration(a, b) {
  return a + b;
}

console.log(`>>> execution:\n`);
console.log(somaNamedFunctionDeclaration(2, 3));
showAllPropertyNamesAndTypes(somaNamedFunctionDeclaration);

//
// Named Function Declaration
//
//   Carregada ANTES da INTERPRETAÇÃO
//
//     Pode ser INTERPRETADA ANTES da DECLARAÇÃO
//

console.log(`>>> execution:\n`);
console.log(somaNamedFunctionDeclarationAntesInterpretacao(2, 3));
showAllPropertyNamesAndTypes(somaNamedFunctionDeclarationAntesInterpretacao);

function somaNamedFunctionDeclarationAntesInterpretacao(a, b) {
  return a + b;
}

//
// Anonymous Function Expression
//

let somaAnonymousFunctionExpression = function (a, b) {
  return a + b;
};

console.log(`>>> execution:\n`);
console.log(somaAnonymousFunctionExpression(2, 3));
showAllPropertyNamesAndTypes(somaAnonymousFunctionExpression);

//
// Anonymous Function Expression
//
//   NÃO Carregada ANTES da INTERPRETAÇÃO
//
//     NÃO Pode ser INTERPRETADA ANTES da DECLARAÇÃO
//
//       ReferenceError: Cannot access
//       'somaAnonymousFunctionExpressionAntesInterpretacao'
//       before initialization
//

// console.log(`>>> execution:\n`);
// console.log(somaAnonymousFunctionExpressionAntesInterpretacao(2, 3));
// showAllPropertyNamesAndTypes(somaAnonymousFunctionExpressionAntesInterpretacao);

// let somaAnonymousFunctionExpressionAntesInterpretacao = function (a, b) {
//   return a + b;
// };

//
// Named Function Expression
//

let somaNamedFunctionExpression = function somaNamedFunctionExpression(a, b) {
  return a + b;
};

console.log(`>>> execution:\n`);
console.log(somaNamedFunctionExpression(2, 3));
showAllPropertyNamesAndTypes(somaNamedFunctionExpression);
