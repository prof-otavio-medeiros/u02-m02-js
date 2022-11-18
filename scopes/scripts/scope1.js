///////////////////////////////////
//
//
if (true) {
  var x = 5;
}
console.log(x);
for (var y = 1; y < 3; y++) {
  var z = 10;
}
console.log(z);
//
//
///////////////////////////////////
var a = "Daffy Duck";
function scope1() {
  console.clear();
  step(
    `A variável 'a' é definida no 'script' de nome 'scope1.js'
com 'global scope' e recebe o valor: ${a}\n\n`,
    true
  );
  //
  // SAÍDA
  //
  //    A variável 'a' é definida no 'script' de nome 'scope1.js'
  //    com 'global scope' e recebe o valor: Daffy Duck
  //
  function delta(b) {
    step(
      `A variável 'b' é definida no 'local scope' da 'function delta()',
mas recebe o valor da variável global 'a' (${a})\n\n`,
      true
    );
    //
    // SAÍDA
    //
    //    A variável 'b' é definida no 'local scope' da 'function delta()',
    //    mas recebe o valor da variável global 'a' (Daffy Duck)
    //
    step(
      `Valor de 'b', dentro da 'function delta()', antes de alterá-lo internamente: ${b}\n\n`,
      true
    );
    //
    // SAÍDA
    //
    //    Valor de 'b', dentro da 'function delta()' antes de alterá-lo internamente: Daffy Duck
    //
    b = `Daffy Duck - alterado dentro da 'function delta()'`;
    step(
      `Valor de 'b', dentro da 'function delta()', após alterá-lo internamente: ${b}\n\n`,
      true
    );
    //
    // SAÍDA
    //
    //    Valor de 'b', dentro da 'function delta()', após alterá-lo internamente:: Daffy Duck - alterado dentro da 'function delta()'
    //
  }
  function epsilon() {
    var c = "Bugs Bunny";
    step(
      `A variável 'c' é definida no 'local scope' da 'function epsilon()' e recebe o valor: ${c}\n\n`,
      true
    );
    //
    // SAÍDA
    //
    //    A variável 'c' é definida no 'local scope' da 'function epsilon()' e recebe o valor: Bugs Bunny
    //
  }
  step(
    `Valor inicial de 'a', antes de chamar a 'function delta()': ${a}\n\n`,
    true
  );
  //
  // SAÍDA
  //
  //    Valor inicial de 'a' antes de chamar a 'function delta()': Daffy Duck
  //
  step(`Chamando a 'function delta()'\n\n`, true);
  //
  // SAÍDA
  //
  //    Chamando a 'function delta()
  //
  delta(a);
  step(`Valor final de 'a' após chamar a 'function delta()': ${a}\n\n`, true);
  //
  // SAÍDA
  //
  //    Valor final de 'a' após chamar a 'function delta()': Daffy Duck
  //
  step(
    typeof b === "undefined"
      ? `Valor final de 'b' fora da 'function delta()': undefined\n\n`
      : `Valor final de 'b' fora da 'function delta()': ${b}\n\n`,
    true
  );
  //
  // SAÍDA
  //
  //    Valor final de 'b' fora da 'function delta(): undefined
  //
  step(`Chamando a 'function epsilon()'\n\n`, true);
  //
  // SAÍDA
  //
  //    Chamando a 'function epsilon()
  //
  epsilon();
  step(
    typeof c === "undefined"
      ? `Valor final de 'c' fora da 'function epson()': undefined\n\n`
      : `Valor final de 'c' fora da 'function epson()': ${c}\n\n`,
    true
  );
  //
  // SAÍDA
  //
  //    Valor final de 'c' a 'function epson()': undefined
  //
  {
    let d = "Lola Bunny";
    step(`Valor de 'd' dentro do bloco no qual foi criada: ${d}`, true);
    //
    // SAÍDA
    //
    //    Valor de 'd' dentro do bloco no qual foi criada:: Lola Bunny
    //
  }
  step(
    typeof d === "undefined"
      ? `Valor de 'd' fora do bloco no qual foi criada: undefined`
      : `Valor de 'd' fora do bloco no qual foi criada: ${d}`,
    false
  );
  //
  // SAÍDA
  //
  //    Valor de 'd' fora do bloco no qual foi criada:: Lola Bunny
  //
}
