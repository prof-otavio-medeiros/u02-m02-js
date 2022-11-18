function scope2() {
  step(
    `A variável 'a' foi definida no 'script' de nome 'scope1.js'
com 'global scope' e por essa razão continua a ser
visível dentro do 'script' de nome 'scope2.js' com seu valor declarado
no 'script' de nome 'scope1.js', ou seja: ${a}\n\n`,
    false
  );
  //
  // SAÍDA
  //
  //    A variável 'a' foi definida no 'script' de nome 'scope1.js'
  //    com 'global scope' e por essa razão continua a ser
  //    visível dentro do 'script' de nome 'scope2.js' com seu valor declarado
  //    no 'script' de nome 'scope1.js', ou seja: Daffy Duck
  //
}
