//
// USING 'fetch'
//
//   $ nvm ls
//
// UPDATE CONFIGURATION
//
//   $ nvm install 18.6.0
//   $ nvm use 18.6.0
//   $ nvm alias default 18.6.0
//
// DOWNGRADE CONFIGURATION
//
//   $ nvm install 13.11.0
//   $ nvm use 13.11.0
//   $ nvm alias default 13.11.0
//

//
// VALOR NUMÉRICO INTEIRO
//

let meuPrimeiroProcessador = 8080;
console.log(meuPrimeiroProcessador, " -> ", typeof meuPrimeiroProcessador);
console.log();

//
// SAÍDA
//
//    8080 -> number
//

//
// VALOR NUMÉRICO EM PONTO FLUTUANTE
//

const PI = 3.1415926;
console.log(PI, " -> ", typeof PI);
console.log();

//
// SAÍDA
//
//    3.1415926 -> number
//

//
// VALOR LÓGICO
//

const VERDADE = true;
console.log(VERDADE, " -> ", typeof VERDADE);
console.log();

//
// SAÍDA
//
//    true -> boolean
//

//
// CADEIA DE CARACTERES
//

let melhorCurso = "Full Stack na Digital College";
console.log(melhorCurso, " -> ", typeof melhorCurso);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College -> string
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ASPA DUPLA EM STRING
//

// //
// // SINTAX ERROR
// //

// let aspaDuplaErr = "Full Stack na Digital College - O "MELHOR" curso";

//
// ASPA DUPLA EM STRING DELIMITADA POR ASPA DUPLA USANDO ESCAPE CHARACTER
//

let aspaDuplaComEscape = "Full Stack na Digital College - O \"MELHOR\" curso";
console.log(aspaDuplaComEscape);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College - O "MELHOR" curso
//

//
// ASPA DUPLA EM STRING DELIMITADA POR ASPA SIMPLES
//

let aspaDuplaEmAspaSimples = 'Full Stack na Digital College - O "MELHOR" curso';
console.log(aspaDuplaEmAspaSimples);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College - O "MELHOR" curso
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ASPA SIMPLES EM STRING
//

// //
// // SINTAX ERROR
// //

// let aspaSimplesErr = 'Full Stack na Digital College - O 'MELHOR' curso';

//
// ASPA SIMPLES EM STRING DELIMITADA POR ASPA SIMPLES USANDO ESCAPE CHARACTER
//

let aspaSimplesComEscape = 'Full Stack na Digital College - O \'MELHOR\' curso';
console.log(aspaSimplesComEscape);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College - O 'MELHOR' curso
//

//
// ASPA SIMPLES EM STRING DELIMITADA POR ASPA DUPLA
//

let aspaSimples = "Full Stack na Digital College - O 'MELHOR' curso";
console.log(aspaSimples);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College - O 'MELHOR' curso
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ASPA DUPLA DENTRO DE UMA STRING DELIMITADA POR ASPA SIMPLES
//

let aspaSimplesComDupla = 'Full Stack na Digital College - O "MELHOR" curso';
console.log(aspaSimplesComDupla);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College - O "MELHOR" curso
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ASPA SIMPLES DENTRO DE UMA STRING DELIMITADA POR ASPA DUPLA
//

let aspaDuplaComSimples = "Full Stack na Digital College - O 'MELHOR' curso";
console.log(aspaDuplaComSimples);
console.log();

//
// SAÍDA
//
//    Full Stack na Digital College - O 'MELHOR' curso
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// OUTROS CARACTERES QUE PRECISAM DO ESCAPE CHARACTER
// PARA SE FAZEREM PRESENTES EM UMA STRING
//

console.log("Backspace \b");
console.log("Form Feed \f");
console.log("New Line  \n");
console.log("Carriage Return \r");
console.log("Horizontal Tabulator \t");
console.log("Vertical Tabulator \v");
console.log();

//
// SAÍDA
//
//    Backspace 
//    Form Feed
//    New Line
//
//    Carriage Return
//    Horizontal Tabulator
//    Vertical Tabulator
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// CONCATENAÇÃO DE STRINGS (+)
//

let primeiroNome = "Otávio";
let ultimoNome = "Medeiros";
let nomeCompleto = primeiroNome + " " + ultimoNome;
console.log(nomeCompleto);
console.log();

//
// SAÍDA
//
//    Otávio Medeiros
//

//
// STRING + NUMBER
//

let texto = "casa ";
let valor = 1234;
console.log(texto + valor);
console.log();

//
// SAÍDA
//
//    casa 1234
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// STRING COMPLEXA
//

let meuPrimeiroComputador =
  "O primeiro 'computador' pessoal que tive em mãos foi um equipamento\nproduzido na Inglaterra por uma empresa chamada \"Sinclair Research\" e\npossuía apenas 2 Kb de memória RAM. Chamava-se 'Sinclair ZX80' e seu\nprocessador era um 'clone' do \"Zilog Z80\" de 8 bits o qual possuía um\n'clock' de 3,25 MHz";
console.log(meuPrimeiroComputador);
console.log();

//
// SAÍDA
//
//    O primeiro 'computador' pessoal que tive em mãos foi um equipamento
//    produzido na Inglaterra por uma empresa chamada "Sinclair Research" e
//    possuía apenas 2 Kb de memória RAM. Chamava-se 'Sinclair ZX80' e seu
//    processador era um 'clone' do "Zilog Z80" de 8 bits o qual possuía um
//    'clock' de 3,25 MHz
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// TEMPLATE STRING COM BACKTICKS
//

let meuPrimeiroComputadorComBackTicks = `
O primeiro 'computador' pessoal que tive em mãos foi um equipamento
produzido na Inglaterra por uma empresa chamada "Sinclair Research" e
possuía apenas 2 Kb de memória RAM. Chamava-se 'Sinclair ZX80' e seu
processador era um 'clone' do "Zilog Z80" de 8 bits o qual possuía um
'clock' de 3,25 MHz`;
console.log(meuPrimeiroComputadorComBackTicks); //
console.log();

// SAÍDA
//
//    O primeiro 'computador' pessoal que tive em mãos foi um equipamento
//    produzido na Inglaterra por uma empresa chamada "Sinclair Research" e
//    possuía apenas 2 Kb de memória RAM. Chamava-se 'Sinclair ZX80' e seu
//    processador era um 'clone' do "Zilog Z80" de 8 bits o qual possuía um
//    'clock' de 3,25 MHz
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// USO DO BACKTICKS DENTRO DE UM TEMPLATE STRING
//

let templateStringComBackticks = `Usando BACKTICKS (\`) em TEMPLATE STRING`;
console.log(templateStringComBackticks);
console.log();

//
// SAÍDA
//
//    Usando BACKTICKS (`) em TEMPLATE STRING
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// INTERPOLAÇÃO DE VARIÁVEIS COM TEMPLATE STRINGS
//

let primeiroNome1 = "José";
let ultimoNome1 = "Castanhedo";
let nacionalidade1 = "brasileira";
let contrato1 = `Vimos por meio deste declarar que ${primeiroNome1} ${ultimoNome1}
de nacionalidade ${nacionalidade1} ...`;
console.log(contrato1);
console.log();

//
// SAÍDA
//
//    Vimos por meio deste declarar que José Castanhedo
//    de nacionalidade brasileira ...
//

//
// INTERPOLAÇÃO DE VARIÁVEIS SEM TEMPLATE STRINGS
//

let primeiroNome2 = "José";
let ultimoNome2 = "Castanhedo";
let nacionalidade2 = "brasileira";
let contrato2 = 'Vimos por meio deste declarar que ' + primeiroNome2 + ' ' + ultimoNome2 + '\nde nacionalidade ' + nacionalidade2 + ' ...';
console.log(contrato2);

//
// SAÍDA
//
//    Vimos por meio deste declarar que José Castanhedo
//    de nacionalidade brasileira ...
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SUBSTITUIÇÃO DE EXPRESSÕES EM TEMPLATE STRINGS
// (USANDO O OPERADOR '+')
//

let primeiroNome3 = "José";
let ultimoNome3 = "Castanhedo";
let nacionalidade3 = "brasileira";
let contrato3 =
  "Vimos por meio deste declarar que " +
  primeiroNome3 +
  " " +
  ultimoNome3 +
  "\nde nacionalidade " +
  nacionalidade3 +
  " ...";
console.log(contrato3);
console.log();

//
// SAÍDA
//
//    Vimos por meio deste declarar que José Castanhedo
//    de nacionalidade brasileira ...
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// IMUTABILIDADE DO TIPO PRIMITIVO STRING
//

let strImutavel = "Digital College";
console.log(strImutavel[8]); // C
strImutavel[8] = "K";
console.log(strImutavel[8]); // C
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// SUBSTITUIÇÃO DE EXPRESSÕES EM TEMPLATE STRINGS
//

let saldo = 20000.15;
let deposito = 4300.05;
let saldoFinal = `
  Seu saldo era de ${saldo} e passou a ser de ${saldo + deposito},
  após o depósito de ${deposito}`;
console.log(saldoFinal);
console.log();

//
// SAÍDA
//
//    Seu saldo era de 20000.15 e passou a ser de 24300.20,
//    após o depósito de 4300.05
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// CONCATENAÇÃO DE STRING COM OUTROS ELEMENTOS
//

console.log("casa " + 1234);
console.log("casa " + String(1234));
console.log("casa " + new String(1234));
console.log("casa " + undefined);
console.log("casa " + null);
console.log();

//
// SAÍDA
//
//    casa 1234
//    casa 1234
//    casa 1234
//    casa undefined
//    casa null
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// LINGUAGEM DINAMICAMENTE TIPADA
//

let stringNaoTipada = "isso é uma string";

//
// SINTAX ERROR
//
//    (A DECLARAÇÃO DO TIPO É USADA EM LINGUAGENS FORTEMENTE TIPADAS - EX: JAVA)
//
//    String stringTipada = "isso é uma string";
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// USO DE PROPRIEDADES E MÉTODOS EM TIPOS PRIMITIVOS STRING
//

let tipoPrimitivoString = "título do capítulo";
console.log("Conteúdo da string: ", tipoPrimitivoString);
console.log("Tamanho da string: ", tipoPrimitivoString.length);
console.log("String em letras maiúsculas: ", tipoPrimitivoString.toUpperCase());
console.log();

//
// SAÍDA
//
//    Conteúdo da string: título do capítulo
//    Tamanho da string: 18
//    String em letras MAIÚSCULAS: TÍTULO DO CAPÍTULO

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// CRIANDO STRINGS A PARTIR DE LITERAIS E DO OBJETO STRING
//

let str1 = "cadeia de caracteres";
let str2 = String("cadeia de caracteres");
let str3 = new String("cadeia de caracteres");
let str4 = str3.valueOf();
console.log(`${str1} -> ${typeof str1}`); // cadeia de caracteres -> string
console.log(`${str2} -> ${typeof str2}`); // cadeia de caracteres -> string
console.log(`${str3} -> ${typeof str3}`); // cadeia de caracteres -> object
console.log(`${str4} -> ${typeof str4}`); // cadeia de caracteres -> string
console.log();

let str5 = (3.1415926).toString();
let str6 = String(3.1415926);
let str7 = new String(3.1415926);
let str8 = str7.valueOf();
console.log(`${str5} -> ${typeof str5}`); // 3.1415926 -> string
console.log(`${str6} -> ${typeof str6}`); // 3.1415926 -> string
console.log(`${str7} -> ${typeof str7}`); // 3.1415926 -> object
console.log(`${str8} -> ${typeof str8}`); // 3.1415926 -> string
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// PROPRIEDADES E MÉTODOS DO OBJETO STRING
//

let strBase = "Digital College";

//
// length
//

console.log(strBase.length); // 5
console.log();

/////////////////////////////
/////////////////////////////

//
// charAt
//

console.log(`>${strBase.charAt(-1)}<`); // >< [string vazia (tamanho 0)]
console.log(`>${strBase.charAt(0)}<`); // >D<
console.log(`>${strBase.charAt(1)}<`); // >i<
console.log(`>${strBase.charAt(7)}<`); // > < [espaço em branco (tamanho 1)]
console.log(`>${strBase.charAt(strBase.length - 1)}<`); // >e<
console.log(`>${strBase.charAt(strBase.length)}<`); // >< [string vazia (tamanho 0)]
console.log();

/////////////////////////////
/////////////////////////////

//
// indexOf
//

console.log(strBase.indexOf("x")); // -1 (não encontrado)
console.log(strBase.indexOf("g")); // 2
console.log(strBase.indexOf("g", 3)); // 13 [próximo 'g' a partir de 3 (inclusive)]
console.log();

/////////////////////////////
/////////////////////////////

//
// lastIndexOf
//

console.log(strBase.lastIndexOf("x")); // -1 (não encontrado)
console.log(strBase.lastIndexOf("g")); // 13
console.log(strBase.lastIndexOf("g", 12)); // 2 ['g' anterior a posição 12 (inclusive)]
console.log();

/////////////////////////////
/////////////////////////////

//
// startsWith
//

console.log(strBase.startsWith("x")); // false
console.log(strBase.startsWith("Dig")); // true
console.log(strBase.startsWith("Col")); // false
console.log(strBase.startsWith("Col", 8)); // true
console.log();

/////////////////////////////
/////////////////////////////

//
// endsWith
//

console.log(strBase.endsWith("x")); // false
console.log(strBase.endsWith("ege")); // true
console.log(strBase.endsWith("Dig")); // false
console.log(strBase.endsWith("Dig", 3)); // true
console.log();

/////////////////////////////
/////////////////////////////

//
// includes
//

console.log(strBase.includes("x")); // false
console.log(strBase.includes("Coll")); // true
console.log(strBase.includes("Coll", 8)); // true [busca a partir de 8 (inclusive)]
console.log(strBase.includes("Coll", 9)); // false [busca a partir de 9 (inclusive)]
console.log();

/////////////////////////////
/////////////////////////////

//
// concat
//

console.log(strBase.concat(" tem o melhor curso de FULL STACK"));
// Digital College tem o melhor curso de FULL STACK
console.log(strBase.concat(" tem", " o melhor" + " curso de" + " FULL STACK"));
// Digital College tem o melhor curso de FULL STACK
console.log();

/////////////////////////////
/////////////////////////////

//
// split
//

let split01 = strBase.split();
console.log(`valor: ${split01}
tipo: ${typeof split01}
nº elementos: ${split01.length}`);
console.log();

/////////////////////////////
/////////////////////////////

//
// SAÍDA
//
//    valor: Digital College
//    tipo: object
//    nº elementos: 1
//

let split02 = strBase.split(" ");
console.log(`valor: ${split02}
tipo: ${typeof split02}
nº elementos: ${split02.length}`);
console.log();

//
// SAÍDA
//
//    valor: Digital, College
//    tipo: object
//    nº elementos: 2
//

/////////////////////////////
/////////////////////////////

//
// slice
//

//
// Usando apenas 'beginIndex'
//
console.log(`>${strBase.slice()}<`); // >Digital College<
console.log(`>${strBase.slice(0)}<`); // >Digital College<
console.log(`>${strBase.slice(3)}<`); // >ital College<
console.log(`>${strBase.slice(strBase.length - 1)}<`); // >e<
console.log(`>${strBase.slice(strBase.length)}<`); // >< [string vazia (tamanho 0)]
console.log(`>${strBase.slice(-5)}<`); // >llege<
console.log();

//
// Usando 'beginIndex' e 'endIndex'
//
console.log(`>${strBase.slice(0, 5)}<`); // >Digit<
console.log(`>${strBase.slice(2, 5)}<`); // >git<
console.log(`>${strBase.slice(2, strBase.length - 1)}<`); // >gital Colleg<
console.log(`>${strBase.slice(2, strBase.length)}<`); // >gital College<
console.log(`>${strBase.slice(2, strBase.length + 10)}<`); // >gital College<
console.log(`>${strBase.slice(2, -8)}<`); // >gital<
console.log(`>${strBase.slice(2, -12)}<`); // >g<
console.log(`>${strBase.slice(2, -13)}<`); // >< [string vazia (tamanho 0)]
console.log();

/////////////////////////////
/////////////////////////////

//
// substring
//

//
// Usando apenas 'beginIndex'
//
console.log(`>${strBase.substring()}<`); // >Digital College<
console.log(`>${strBase.substring(0)}<`); // >Digital College<
console.log(`>${strBase.substring(3)}<`); // >ital College<
console.log(`>${strBase.substring(strBase.length - 1)}<`); // >e<
console.log(`>${strBase.substring(strBase.length)}<`); // >< [string vazia (tamanho 0)]
console.log(`>${strBase.substring(-5)}<`); // >llege<
console.log();

//
// Usando 'beginIndex' e 'endIndex'
//
console.log(`>${strBase.substring(0, 5)}<`); // >Digit<
console.log(`>${strBase.substring(2, 5)}<`); // >git<
console.log(`>${strBase.substring(2, 2)}<`); // >< [string vazia (tamanho 0)]
console.log(`>${strBase.substring(2, strBase.length - 1)}<`); // >gital Colleg<
console.log(`>${strBase.substring(2, strBase.length)}<`); // >gital College<
console.log(`>${strBase.substring(2, strBase.length + 10)}<`); // >gital College<
console.log(`>${strBase.substring(7, 3)}<`); // >ital<
console.log(`>${strBase.substring(2, -8)}<`); // >Di<
console.log(`>${strBase.substring(-8, 2)}<`); // >Di<
console.log();

/////////////////////////////
/////////////////////////////

//
// match
//

let regEx01 = /[A-Z]/;
let match01 = strBase.match(regEx01);
console.log(`>${match01}<`); // >D<
console.log(`>${typeof match01}<`); // >object<
console.log();

let regEx02 = /[A-Z]/g;
let match02 = strBase.match(regEx02);
console.log(`>${match02}<`); // >D,C<
console.log(`>${typeof match02}<`); // >object<
console.log();

//
// replace
//

let regEx03 = /college/;
let repl01 = strBase.replace(regEx03, "Age");
console.log(`>${repl01}<`); // >Digital College<
console.log();

let regEx04 = /College/;
console.log(`>${strBase.replace(regEx04, "Age")}<`); // >Digital Age<
console.log();

let regEx05 = /college/i;
let repl02 = strBase.replace(regEx05, "Age");
console.log(`>${repl02}<`); // >Digital Age<
console.log();

//
// search
//

let regEx06 = /college/i;
console.log(strBase.search(regEx06)); // 8
console.log();

/////////////////////////////
/////////////////////////////

//
// toLowerCase / toUpperCase
//

console.log(`>${strBase.toLowerCase()}<`); // >digital college<
console.log(`>${strBase.toUpperCase()}<`); // >DIGITAL COLLEGE<
console.log();

/////////////////////////////
/////////////////////////////

//
// repeat
//

// console.log(`>${strBase.repeat(-1)}<`); // RangeError: Invalid count value
console.log(`>${strBase.repeat()}<`); // >< [string vazia (tamanho 0)]
console.log(`>${strBase.repeat(0)}<`); // >< [string vazia (tamanho 0)]
console.log(`>${strBase.repeat(2)}<`); // >Digital CollegeDigital College<
console.log();

/////////////////////////////
/////////////////////////////

//
// trim
//
let strLeftTrim = `    ${strBase}`;
let strRightTrim = `${strBase}    `;
let strBothTrim = `    ${strBase}    `;

console.log(`>${strLeftTrim}<`); // >    Digital College<
console.log(`>${strLeftTrim.trim()}<`); // >Digital College<
console.log();

console.log(`>${strRightTrim}<`); // >Digital College    <
console.log(`>${strRightTrim.trim()}<`); // >Digital College<
console.log();

console.log(`>${strBothTrim}<`); // >    Digital College    <
console.log(`>${strBothTrim.trim()}<`); // >Digital College<
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// CRIANDO NUMBERS A PARTIR DE LITERAIS E DO OBJETO NUMBER
//

let num1 = 3.1415926;
let num2 = Number(3.1415926);
let num3 = new Number(3.1415926);
let num4 = num3.valueOf();
console.log(`${num1} -> ${typeof num1}`); // 3.1415926 -> number
console.log(`${num2} -> ${typeof num2}`); // 3.1415926 -> number
console.log(`${num3} -> ${typeof num3}`); // 3.1415926 -> object
console.log(`${num4} -> ${typeof num4}`); // 3.1415926 -> number
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// BIGINT - EXCEÇÃO AO USO DO NEW
//

let big1 = 1234n;
let big2 = BigInt(1234);
//
// TypeError: BigInt is not a constructor
//
//    let big3 = new BigInt('1234');
//
console.log(`${big1} -> ${typeof big1}`); // 1234 -> bigint
console.log(`${big2} -> ${typeof big2}`); // 1234 -> bigint
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// NUMBER LIMITS
//

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const evl = (varName, varValue) => {
  let varResult = eval(varValue);
  console.log(
    `let ${varName} = ${varValue}; | result: ${varResult} | typeof: ${typeof varResult}`
  );
};

//
// NUMBERS - FORMAS DE REPRESENTAÇÃO
//
function numerosFormasDeRepresentacao() {
  let decimal = 1234567;
  let binario1 = 0b1001101;
  let binario2 = 0b1001110;
  let octal1 = 0o74217;
  let octal2 = 0o74220;
  let hexa1 = 0x0fff;
  let hexa2 = 0x1000;
  // console.log(`${decimal} -> ${typeof decimal}`); // 1234567 -> number
  // console.log(`${binario1} -> ${typeof binario1}`); // 77 -> number
  // console.log(`${binario2} -> ${typeof binario2}`); // 78 -> number
  // console.log(`${octal1} -> ${typeof octal1}`); // 30863 -> number
  // console.log(`${octal2} -> ${typeof octal2}`); // 30864 -> number
  // console.log(`${hexa1} -> ${typeof hexa1}`); // 4095 -> number
  // console.log(`${hexa2} -> ${typeof hexa2}`); // 4096 -> number
  evl("decimal", "1234567");
  evl("binario1", "0b1001101");
  evl("binario2", "0B1001110");
  evl("octal1", "0o74217");
  evl("octal2", "0o74220");
  evl("hexa1", "0x0fff");
  evl("hexa2", "0X1000");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// OPERAÇÕES QUE RETORNAM NaN
//

let nan1 = Number.parseInt("isso não é um número");
let nan2 = Number.parseFloat("isso não é um número");
let nan3 = Math.sqrt(-1);
let nan4 = 3.14 * NaN;
let nan5 = undefined + undefined;
let nan6 = 0 * Infinity;
console.log(`${nan1} -> ${typeof nan1}`); // NaN -> number
console.log(`${nan2} -> ${typeof nan2}`); // NaN -> number
console.log(`${nan3} -> ${typeof nan3}`); // NaN -> number
console.log(`${nan4} -> ${typeof nan4}`); // NaN -> number
console.log(`${nan5} -> ${typeof nan5}`); // NaN -> number
console.log(`${nan6} -> ${typeof nan6}`); // NaN -> number
console.log();

//
// COMPARAÇÕES COM NaN
//

console.log(NaN === NaN); // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Number.NaN)); // true
console.log(Number.isNaN(NaN)); // true
console.log(NaN !== NaN); // true
console.log(Number.NaN !== Number.NaN); // true

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAYS 01
//

let altura1 = 1.78;
let altura2 = 1.49;
let altura3 = 1.65;
let altura4 = 1.83;
let altura5 = 2.11;
let somaAlturas = altura1 + altura2 + altura3 + altura4 + altura5;
let qtdAlturas = 5;
let mediaAlturas = somaAlturas / qtdAlturas;
let menorAltura = Math.min(altura1, altura2, altura3, altura4, altura5);
let maiorAltura = Math.max(altura1, altura2, altura3, altura4, altura5);
console.log(`
A altura média entre as ${qtdAlturas} alturas abaixo é ${mediaAlturas}

  ${altura1}
  ${altura2}
  ${altura3}
  ${altura4}
  ${altura5}

A menor altura é ${menorAltura} e a maior é ${maiorAltura}.
`);
console.log();

//
// SAÍDA
//
//    A altura média entre as 5 alturas abaixo é 1.7719999999999998
//
//      1.78
//      1.49
//      1.65
//      1.83
//      2.11
//
//    A menor altura é 1.49 e a maior é 2.11.
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAYS 02
//

let alturas = [1.78, 1.49, 1.65, 1.83, 2.11];
let somaAlturas = 0;
let qtdAlturas = alturas.length;
let menorAltura = Number.POSITIVE_INFINITY;
let maiorAltura = Number.NEGATIVE_INFINITY;
for (let indice = 0; indice < qtdAlturas; indice++) {
  somaAlturas += alturas[indice];
  if (alturas[indice] < menorAltura) {
    menorAltura = alturas[indice];
  }
  if (alturas[indice] > maiorAltura) {
    maiorAltura = alturas[indice];
  }
}
let mediaAlturas = somaAlturas / qtdAlturas;
function listaAlturas(alturas) {
  let lista = "";
  for (let indice = 0; indice < alturas.length; indice++) {
    lista += `  ${alturas[indice]}`;
    if (indice < alturas.length - 1) {
      lista += `\n`;
    }
  }
  return lista;
}
console.log(`
A altura média entre as ${qtdAlturas} alturas abaixo é ${mediaAlturas}

${listaAlturas(alturas)}

A menor altura é ${menorAltura} e a maior é ${maiorAltura}.
`);
console.log();

//
// SAÍDA
//
//    A altura média entre as 5 alturas abaixo é 1.7719999999999998
//
//      1.78
//      1.49
//      1.65
//      1.83
//      2.11
//
//    A menor altura é 1.49 e a maior é 2.11.
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 03 (OPERAÇÕES BASICAS)
//

let arrayBase = ["Digital", "college"];

// acessando elemento em posição inexistente
console.log(arrayBase); // [ 'Digital', 'college' ]
console.log(arrayBase[0]); // Digital
console.log(arrayBase[1]); // college
console.log(arrayBase[2]); // undefined

// alterando elemento por seu índice
arrayBase[1] = "College";
console.log(arrayBase); // [ 'Digital', 'College' ]

// inserindo elemento em posição definida pelo indice
arrayBase[4] = "GAPs";
console.log(arrayBase[0]); // Digital
console.log(arrayBase[1]); // College
console.log(arrayBase[2]); // undefined
console.log(arrayBase[3]); // undefined
console.log(arrayBase[4]); // GAPs
console.log(arrayBase); // [ 'Digital', 'College', <2 empty items>, 'GAPs' ]
console.log(arrayBase.length); // 5

//
// remover / inserir em posição definida pelo indice e quantificador
//

// remover
console.log(arrayBase.splice(4, 1)); // [ 'GAPs' ]
console.log(arrayBase); // [ 'Digital', 'College', <2 empty items> ]
console.log(arrayBase.splice(2, 2)); // [ <2 empty items> ]
console.log(arrayBase); // [ 'Digital', 'College' ]
console.log(arrayBase.splice(0, 2)); // [ 'Digital', 'College' ]
console.log(arrayBase); // []

// inserir
arrayBase.splice(0, 0, "JavaScript", "Python", "College");
console.log(arrayBase); // [ 'JavaScript', 'Python', 'College'  ]
arrayBase.splice(1, 0, "Go");
console.log(arrayBase); // [ 'JavaScript', 'Go', 'Python', 'College'  ]
arrayBase.splice(0, 3, "Digital");
console.log(arrayBase); // [ 'Digital', 'College'  ]

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 04 (OPERÇÕES BÁSICAS NO FINAL DO ARRAY)
//

// inserir elemento no final
arrayBase.push("Javascript");
console.log(arrayBase); // [ 'Digital', 'College', 'Javascript' ]

// remover elemento do final
console.log(arrayBase.pop()); // Javascript
console.log(arrayBase); // [ 'Digital', 'College' ]

// remover elemento do final de um array vazio
console.log([].pop()); // undefined

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 05 (OPERÇÕES BÁSICAS NO INÍCIO DO ARRAY)
//

// inserir elemento no início
arrayBase.unshift("Javascript");
console.log(arrayBase); // [ 'Javascript', 'Digital', 'College' ]

// remover um elemento do início
console.log(arrayBase.shift()); // Javascript
console.log(arrayBase); // [ 'Digital', 'College' ]

// remover um elemento do inicio de um array vazio
console.log([].shift()); // undefined

// inserir elemento ao final
array2.push("Java");
console.log(array2); // [ 'Digital', 'College', 'Java' ]

// alterar elemento pelo seu índice
array2[2] = "Javascript";
console.log(array2); // [ 'Digital', 'College', 'Javascript' ]

// remover um elemento do final
console.log(array2.pop()); // Javascript
console.log(array2); // [ 'Digital', 'College' ]

// remover um elemento do final de um array vazio
console.log([].pop()); // undefined

// concatenar arrays

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 06 (ARRAYS MULTIDIMENSIONAIS)
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 2.11];
let arrayNomes = ["Carlos", "Madalena", "Henrique", "Joana", "Pedro"];
let arrayAlturasNomes = [arrayAlturas, arrayNomes];
console.log(arrayAlturasNomes.length); // 2
console.log(arrayAlturasNomes);
//
// SAÍDA
//
//    [
//      [ 1.78, 1.49, 1.65, 1.83, 2.11 ],
//      [ 'Carlos', 'Madalena', 'Henrique', 'Joana', 'Pedro' ]
//    ]
//
console.log(arrayAlturasNomes[0].length); // 5
console.log(arrayAlturasNomes[0]); // [1.78, 1.49, 1.65, 1.83, 2.11]
console.log(arrayAlturasNomes[1].length); // 5
console.log(arrayAlturasNomes[1]); // [ 'Carlos', 'Madalena', 'Henrique', 'Joana', 'Pedro' ]

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 07 (DEMANDA COM ALTURAS E NOMES)
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 2.11];
let arrayNomes = ["Carlos", "Madalena", "Henrique", "Joana", "Pedro"];
let arrayAlturasNomes = [arrayAlturas, arrayNomes];
let somaAlturas = 0;
let qtdAlturas = arrayAlturas.length;
let mediaAlturas = 0;
let menorAltura = Number.POSITIVE_INFINITY;
let maiorAltura = Number.NEGATIVE_INFINITY;
let nomeMenorAltura = "";
let nomeMaiorAltura = "";
for (let indice = 0; indice < qtdAlturas; indice++) {
  somaAlturas += arrayAlturasNomes[0][indice];
  if (arrayAlturasNomes[0][indice] < menorAltura) {
    menorAltura = arrayAlturasNomes[0][indice];
    nomeMenorAltura = arrayAlturasNomes[1][indice];
  }
  if (arrayAlturasNomes[0][indice] > maiorAltura) {
    maiorAltura = arrayAlturasNomes[0][indice];
    nomeMaiorAltura = arrayAlturasNomes[1][indice];
  }
}
mediaAlturas = somaAlturas / qtdAlturas;
function listaAlturas(arrayAlturas) {
  let lista = "";
  for (let indice = 0; indice < arrayAlturas.length; indice++) {
    lista += `  ${arrayAlturasNomes[0][indice]}`;
    if (indice < arrayAlturas.length - 1) {
      lista += `\n`;
    }
  }
  return lista;
}
console.log(`
A altura média entre as ${qtdAlturas} arrayAlturas abaixo é ${mediaAlturas}

${listaAlturas(arrayAlturas)}

A menor altura é ${menorAltura} e pertence a ${nomeMenorAltura}.
A maior altura é ${maiorAltura} e pertence a ${nomeMaiorAltura}.
`);
console.log();

//
// SAÍDA
//
//    A altura média entre as 5 arrayAlturas abaixo é 1.7719999999999998
//
//      1.78
//      1.49
//      1.65
//      1.83
//      2.11
//
//    A menor altura é 1.49 e pertence a Madalena.
//    A maior altura é 2.11 e pertence a Pedro.
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 08 (DEMANDA COM ALTURAS, NOMES E IDADES)
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 2.11];
let arrayNomesIdades = [
  ["Carlos", 22],
  ["Madalena", 17],
  ["Henrique", 35],
  ["Joana", 24],
  ["Pedro", 18],
];
let arrayAlturasNomesIdades = [arrayAlturas, arrayNomesIdades];
console.log(arrayAlturasNomesIdades.length); // 2
console.log(arrayAlturasNomesIdades);
//
// SAÍDA
//
//    [
//      [ 1.78, 1.49, 1.65, 1.83, 2.11 ],
//      [
//        [ 'Carlos', 22 ],
//        [ 'Madalena', 17 ],
//        [ 'Henrique', 35 ],
//        [ 'Joana', 24 ],
//        [ 'Pedro', 18 ]
//      ]
//    ]
//
console.log(arrayAlturasNomesIdades[0].length); // 5
console.log(arrayAlturasNomesIdades[0]); // [1.78, 1.49, 1.65, 1.83, 2.11]
console.log(arrayAlturasNomesIdades[1].length); // 5
console.log(arrayAlturasNomesIdades[1]);
//
// SAÍDA
//
//    [
//      [ 'Carlos', 22 ],
//      [ 'Madalena', 17 ],
//      [ 'Henrique', 35 ],
//      [ 'Joana', 24 ],
//      [ 'Pedro', 18 ]
//    ]
//
console.log(arrayAlturasNomesIdades[1][0].length); // 2
console.log(arrayAlturasNomesIdades[1][0]); // [ 'Carlos', 22 ]
console.log(arrayAlturasNomesIdades[1][1].length); // 2
console.log(arrayAlturasNomesIdades[1][1]); // [ 'Madalena', 17 ]
console.log(arrayAlturasNomesIdades[1][2][1]); // 35

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// ARRAY 09
//

//
// concat
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
arrayAlturas = arrayAlturas.concat([1.74, 1.8]);
console.log(arrayAlturas); // [1.78, 1.49, 1.65, 1.83, 1.65, 2.11, 1.74, 1.80]

//
// every
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];

let alturaMinima = 1.8;
function menorQueAlturaMinima(element, index, array) {
  console.log(`element: ${element} | index: ${index} || array: ${array}`);
  return element < alturaMinima;
}
console.log(arrayAlturas.every(menorQueAlturaMinima));
console.log();

//
// SAÍDA
//
//    element: 1.78 | index: 0 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.49 | index: 1 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.65 | index: 2 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.83 | index: 3 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    false
//

let alturaMaxima = 1.45;
function maiorQueAlturaMaxima(element, index, array) {
  console.log(`element: ${element} | index: ${index} || array: ${array}`);
  return element > alturaMaxima;
}
console.log(arrayAlturas.every(maiorQueAlturaMaxima));
console.log();

//
// SAÍDA
//
//    element: 1.78 | index: 0 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.49 | index: 1 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.65 | index: 2 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.83 | index: 3 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 1.65 | index: 4 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    element: 2.11 | index: 5 || array: 1.78,1.49,1.65,1.83,1.65,2.11
//    true
//

//
// filter
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
let alturaFiltro = 1.6;
let arrayAlturasFiltradas = arrayAlturas.filter(
  (altura) => altura >= alturaFiltro
);
console.log(arrayAlturasFiltradas); // [ 1.78, 1.65, 1.83, 1.65, 2.11 ]

//
// find
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
let alturaProcurada = 1.65;
let procurarAltura = (altura, index) => {
  if (altura == alturaProcurada) {
    console.log(`\nA altura de ${altura} foi encontrada no índice ${index}\n`);
    return true;
  }
};
console.log(arrayAlturas.find(procurarAltura));

//
// SAÍDA
//
//    A altura de 1.65 foi encontrada no índice 2
//
//    1.65
//

//
// forEach
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
let alturaMinima = 1.7;
let arrayResultados = [];
let retorno = arrayAlturas.forEach((altura, index) => {
  arrayResultados[index] = [altura, "Aprovado"];
  if (altura < alturaMinima) {
    arrayResultados[index][1] = "Reprovado";
  }
});
console.log("arrayAlturas:\n", arrayAlturas);
console.log("arrayResultados:\n", arrayResultados);
console.log("retorno:\n", retorno);

//
// SAÍDA
//
//    arrayAlturas:
//     [ 1.78, 1.49, 1.65, 1.83, 1.65, 2.11 ]
//    arrayResultados:
//     [
//      [ 1.78, 'Aprovado' ],
//      [ 1.49, 'Reprovado' ],
//      [ 1.65, 'Reprovado' ],
//      [ 1.83, 'Aprovado' ],
//      [ 1.65, 'Reprovado' ],
//      [ 2.11, 'Aprovado' ]
//     ]
//    retorno:
//     undefined
//

//
// includes
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
console.log(arrayAlturas.includes(1.83)); // true
console.log(arrayAlturas.includes(1.22)); // false

//
// indexOf
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
console.log(arrayAlturas.indexOf(1.83)); // true
console.log(arrayAlturas.indexOf(1.22)); // false

//
// map
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
let alturaMinima = 1.7;
let arrayResultados = arrayAlturas.map((altura, index) => {
  let elemento = [altura, "Aprovado"];
  if (altura < alturaMinima) {
    elemento = [altura, "Reprovado"];
  }
  return elemento;
});
console.log("arrayAlturas:\n", arrayAlturas);
console.log("arrayResultados:\n", arrayResultados);

//
// SAÍDA
//
//    arrayAlturas:
//     [ 1.78, 1.49, 1.65, 1.83, 1.65, 2.11 ]
//    arrayResultados:
//     [
//      [ 1.78, 'Aprovado' ],
//      [ 1.49, 'Reprovado' ],
//      [ 1.65, 'Reprovado' ],
//      [ 1.83, 'Aprovado' ],
//      [ 1.65, 'Reprovado' ],
//      [ 2.11, 'Aprovado' ]
//     ]
//

//
// reduce
//

let arrayAlturas = [1.78, 1.49, 1.65, 1.83, 1.65, 2.11];
let somaAlturasSemValorInicialDefinido = arrayAlturas.reduce(
  (alturaAnterior, alturaAtual) => {
    return alturaAnterior + alturaAtual;
  }
);
let somaAlturasComValorInicialDefinido = arrayAlturas.reduce(
  (alturaAnterior, alturaAtual) => {
    return alturaAnterior + alturaAtual;
  },
  10.51
);
console.log(somaAlturasSemValorInicialDefinido); // 10.51
console.log(somaAlturasComValorInicialDefinido); // 21.02

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// desconstructing Objects
//

let arrUsers = [
  {
    id: 3835,
    name: "Chandraayan Ahuja Jr.",
    email: "ahuja_jr_chandraayan@will.info",
    gender: "male",
    status: "inactive",
  },
  {
    id: 3834,
    name: "Ujjawal Kocchar",
    email: "ujjawal_kocchar@morar-purdy.com",
    gender: "female",
    status: "inactive",
  },
  {
    id: 3833,
    name: "Bhuvaneshwar Khan II",
    email: "bhuvaneshwar_khan_ii@kerluke.com",
    gender: "male",
    status: "active",
  },
];

let user01 = arrUsers[1];

// console.log(user01);

// let id = user01.id;
// let name = user01.name;
// let email = user01.email;

// console.log(`
//   id: ${id}
//   name: ${name}
//   email: ${email}
// `);

//
// SAÍDA
//
//   id: 3834
//   name: Ujjawal Kocchar
//   email: ujjawal_kocchar@morar-purdy.com
//

let { id, name, email } = user01;

console.log(`
id: ${id}
name: ${name}
email: ${email}
`);

//
// SAÍDA
//
//   id: 3834
//   name: Ujjawal Kocchar
//   email: ujjawal_kocchar@morar-purdy.com
//

//
// desconstructing Arrays
//

let arrNumerosPrimos = [1, 3, 5, 7, 11, 13, 17];

// let primeiroPrimo = arrNumerosPrimos[0];
// let quartoPrimo = arrNumerosPrimos[3];
// let sextoPrimo = arrNumerosPrimos[5];

// console.log(`
//   primeiroPrimo: ${primeiroPrimo}
//   quartoPrimo: ${quartoPrimo}
//   sextoPrimo: ${sextoPrimo}
// `);

//
// SAÍDA
//
//    primeiroPrimo: 1
//    quartoPrimo: 7
//    sextoPrimo: 13

let [primeiroPrimo, , , quartoPrimo, , sextoPrimo] = arrNumerosPrimos;

console.log(`
  primeiroPrimo: ${primeiroPrimo}
  quartoPrimo: ${quartoPrimo}
  sextoPrimo: ${sextoPrimo}
`);

//
// SAÍDA
//
//    primeiroPrimo: 1
//    quartoPrimo: 7
//    sextoPrimo: 13

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Objects Literais
//

let objExemplo = {
  chave1: "valor1",
  chave2: 3.1415926,
  chave3: false,
  chave4: function (param1, param2) {
    return param1 + param2;
  },
  chave5: [1, 2, 3, 4],
  chave6: {
    chave7: "valor7",
    chave8: 1 + 3,
  },
};

//
// usando notação ponto (.)
//

console.log(`
objExemplo.chave1: ${objExemplo.chave1}
typeof objExemplo.chave1: ${typeof objExemplo.chave1}`);

console.log(`
objExemplo.chave2: ${objExemplo.chave2}
typeof objExemplo.chave2: ${typeof objExemplo.chave2}`);

console.log(`
objExemplo.chave3: ${objExemplo.chave3}
typeof objExemplo.chave3: ${typeof objExemplo.chave3}`);

console.log(`
objExemplo.chave4: ${objExemplo.chave4}
typeof objExemplo.chave4: ${typeof objExemplo.chave4}`);

console.log(`
objExemplo.chave5: ${objExemplo.chave5}
typeof objExemplo.chave5: ${typeof objExemplo.chave5}`);

console.log(`
objExemplo.chave6: ${objExemplo.chave6}
typeof objExemplo.chave6: ${typeof objExemplo.chave6}`);

console.log(`
objExemplo.chave6.chave7: ${objExemplo.chave6.chave7}
typeof objExemplo.chave6.chave7: ${typeof objExemplo.chave6.chave7}`);

console.log(`
objExemplo.chave6.chave8: ${objExemplo.chave6.chave8}
typeof objExemplo.chave6.chave8: ${typeof objExemplo.chave6.chave8}`);

//
// SAÍDA
//
//    objExemplo.chave1: valor1
//    typeof objExemplo.chave1: string
//
//    objExemplo.chave2: 3.1415926
//    typeof objExemplo.chave2: number
//
//    objExemplo.chave3: false
//    typeof objExemplo.chave3: boolean
//
//    objExemplo.chave4: function (param1, param2) {
//      return param1 + param2;
//    }
//    typeof objExemplo.chave4: function
//
//    objExemplo.chave5: 1,2,3,4
//    typeof objExemplo.chave5: object
//
//    objExemplo.chave6: [object Object]
//    typeof objExemplo.chave6: object
//
//    objExemplo.chave6.chave7: valor7
//    typeof objExemplo.chave6.chave7: string
//
//    objExemplo.chave6.chave8: 4
//    typeof objExemplo.chave6.chave8: number
//

//
// usando notação ponto de array ([])
//

console.log(`
objExemplo["chave1"]: ${objExemplo["chave1"]}
typeof objExemplo["chave1"]: ${typeof objExemplo["chave1"]}`);

console.log(`
objExemplo["chave2"]: ${objExemplo["chave2"]}
typeof objExemplo["chave2"]: ${typeof objExemplo["chave2"]}`);

console.log(`
objExemplo["chave3"]: ${objExemplo["chave3"]}
typeof objExemplo["chave3"]: ${typeof objExemplo["chave3"]}`);

console.log(`
objExemplo["chave4"]: ${objExemplo["chave4"]}
typeof objExemplo["chave4"]: ${typeof objExemplo["chave4"]}`);

console.log(`
objExemplo["chave5"]: ${objExemplo["have5"]}
typeof objExemplo["chave5"]: ${typeof objExemplo["chave5"]}`);

console.log(`
objExemplo["chave6"]: ${objExemplo["chave6"]}
typeof objExemplo["chave6"]: ${typeof objExemplo["chave6"]}`);

console.log(`
objExemplo["chave6"]["chave7"]: ${objExemplo["chave6"]["chave7"]}
typeof objExemplo["chave6"]["chave7"]: ${typeof objExemplo["chave6"][
  "chave7"
]}`);

console.log(`
objExemplo.chave6["chave8"]: ${objExemplo.chave6["chave8"]}
typeof objExemplo.chave6["chave8"]: ${typeof objExemplo.chave6["chave8"]}`);

//
// SAÍDA
//
//    objExemplo["chave1"]: valor1
//    typeof objExemplo["chave1"]: string
//
//    objExemplo["chave2"]: 3.1415926
//    typeof objExemplo["chave2"]: number
//
//    objExemplo["chave3"]: false
//    typeof objExemplo["chave3"]: boolean
//
//    objExemplo["chave4"]: function (param1, param2) {
//      return param1 + param2;
//    }
//    typeof objExemplo["chave4"]: function
//
//    objExemplo["chave5"]: undefined
//    typeof objExemplo["chave5"]: object
//
//    objExemplo["chave6"]: [object Object]
//    typeof objExemplo["chave6"]: object
//
//    objExemplo["chave6"]["chave7"]: valor7
//    typeof objExemplo["chave6"]["chave7"]: string
//
//    objExemplo.chave6["chave8"]: 4
//    typeof objExemplo.chave6["chave8"]: number
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Criando 'objects' literalmente com repetição
//

let pessoa01 = { primeiroNome: "Pierre", ultimoNome: "Sá", idade: 42 };
let pessoa02 = { primeiroNome: "Germano", ultimoNome: "Rosa", idade: 56 };
let pessoa03 = { primeiroNome: "Carlyle", ultimoNome: "Fernandes", idade: 57 };

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Função Fábrica x Função Construtura
//

//
// Função Fábrica
//
//    - Usa 'Named Function Declaration'
//    - Por convenção inicia-se com letra minúscula
//    - Fabrica objetos por meio da invocação de uma função
//

function pessoa(primeiroNome, ultimoNome, idade) {
  return {
    primeiroNome,
    ultimoNome,
    idade,
  };
}

let claudio = pessoa("Cláudio", "Araripe", 32);
let marcia = pessoa("Márcia", "Mendonça", 30);

console.log(claudio); // { primeiroNome: 'Cláudio', ultimoNome: 'Araripe', idade: 32 }
console.log(marcia); // { primeiroNome: 'Márcia', ultimoNome: 'Mendonça', idade: 30 }
console.log();

//
// Função Construtora
//
//    - Usa 'Anonymous Function Expression'
//    - Por convenção inicia-se com letra maiúscula
//    - Cria objetos por meio do 'new' ('syntatic sugar')
//

let Pessoa = function (primeiroNome, ultimoNome, idade) {
  this.primeiroNome = primeiroNome;
  this.ultimoNome = ultimoNome;
  this.idade = idade;
};

let francisco = new Pessoa("Francisco", "Alencar", 19);
console.log(francisco); // Pessoa { primeiroNome: 'Francisco', ultimoNome: 'Alencar', idade: 19 }

//
// Equivalente a:
//
//    - Criar um 'object' vazio ({})
//    - Passar esse 'object' vazio como o primeiro
//      parâmetro de uma das funções abaixo:
//        - call()
//        - apply()
//            - Usando 'call' e 'applay'
//                - O primeiro parãmetro passado ('object') passa
//                  a ser o 'context' na qual a 'function' invocada
//                  será executada
//                - O 'this' na 'function' invocada passa a referenciar
//                  o primeiro parãmetro passado ('object')
//    - Caso existam parâmetros a serem passados para
//      a 'Função Construtora', os mesmos devem vir após o
//      parâmetro 'object'
//
let mario = {};
Pessoa.call(mario, "Mário", "Soares", 75);
console.log(mario);
console.log();

//
// O 'ECMAScript 2015' introduziu a palavra reservada 'class'
//

class ClassPessoa {
  constructor(primeiroNome, ultimoNome, idade) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
  }
}

let paulo = new ClassPessoa("Paulo", "Vidal", 49);
console.log(paulo); // ClassPessoa { primeiroNome: 'Paulo', ultimoNome: 'Vidal', idade: 49 }
console.log();

//
// for...in
//

for (const key in paulo) {
  console.log(`
  key  : ${key}
  value: ${paulo[key]}`);
}
console.log();

//
// SAÍDA
//
//    key  : primeiroNome
//    value: Paulo
//
//    key  : ultimoNome
//    value: Vidal
//
//    key  : idade
//    value: 49
//

//
// for...of
//

//
// NOT WORKS OVER CLASS
//

// for (const value of paulo) {
//   console.log(`
//   value: ${value}`);
// }
// console.log();

let arrIterable = ["Digital Collegea", 3.1415926, true];

for (const value of arrIterable) {
  console.log(value);
}
console.log();

//
// SAÍDA
//
//    Digital Collegea
//    3.1415926
//    true
//

//
// Object.keys()
//

console.log(Object.keys(paulo)); // [ 'primeiroNome', 'ultimoNome', 'idade' ]
console.log();

//
// Object.values()
//

console.log(Object.values(paulo)); // [ 'Paulo', 'Vidal', 49 ]
console.log();

//
// Ao usar uma 'Função Construtura', não esquecer
// de usar o 'new'. Caso o mesmo seja esqueciso
// o efeito é o de 'invocar a função'. Como
// o 'scope' da função é 'global', as variáveis
// declaradas dentro da função com um 'this' passam
// a pertencer ao 'global scope'
//

// let antonio = Pessoa("Antônio", "Silva", 55);
// console.log(antonio);

//
// Não aconteceu. A chamada encontra 'this'
// como 'undefined', dentro da 'function'
//

//
// Closures
//
//    - A 'finction closure03' mantém a referência
//      das 'properties' / 'functions' pertencentes
//      a 'function closure02', na qual está inserida
//

let closure01 = function closure02() {
  let message = "Digital College";
  return function closure03() {
    return message;
  };
};

console.log(closure01);
console.log(closure01());
console.log(closure01()());
console.log();

let cl01 = closure01;
let cl02 = cl01();
let cl03 = cl02();
console.log(cl01);
console.log(cl02);
console.log(cl03);
console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// localStorage
//
//
//    $ npm install node-localstorage --save-dev
//
//    import { LocalStorage } from "node-localstorage";
//
//    global.localStorage = new LocalStorage('./scratch');
//

import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage("./scratch");

localStorage.setItem("theBest", "Digital College");
localStorage.setItem("me", "Otávio Medeiros");
localStorage.setItem("pi", 3.1415926);
console.log(localStorage.getItem("theBest")); // Digital College
console.log(localStorage.getItem("me")); // Otávio Medeiros
console.log(localStorage.getItem("pi")); // 3.1415926
console.log(localStorage.length); // 3
localStorage.removeItem("pi");
console.log(localStorage.getItem("pi")); // null
console.log(localStorage.length); // 2
localStorage.clear();
console.log(localStorage.length); // 0

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//
// SAÍDA
//
//    { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
//

fetch("http://localhost:9095/jornadas")
  .then((response) => response.json())
  .then((json) => console.log(json));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Objects Função Construtora
//

let objExemplo = Object("Digital College");
console.log(`
objExemplo: ${objExemplo}
typeof objExemplo: ${typeof objExemplo}`);

let x = { a: 1, b: 2, c: { d: 3, e: 4 } };
let y = {};
console.log(x.__proto__);
console.log(Object.getPrototypeOf(x));
console.log(x.__proto__ === Object.getPrototypeOf(x));
console.log(x.c.__proto__);
console.log(Object.getPrototypeOf(x.c));
console.log(x.c.__proto__ === Object.getPrototypeOf(x.c));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");
console.log(myCar.cnam);
myCar.cnam = "Fiat Palio 2008";
console.log(myCar.cnam);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

let dt1 = new Date();
console.log(dt1);
console.log(dt1.__proto__);
console.log(dt1.prototype);
console.log(Object.getPrototypeOf(dt1));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function newPersonObj(name, age, home, job, pets) {
  this.name = name;
  this.age = age;
  this.home = home;
  this.job = job;
  this.pets = pets;
}

let myFriend1 = new newPersonObj("Jason", 30, "Seattle", true, [
  "Willow",
  "Cooper",
]);
newPersonObj.prototype.gender = "male";
console.log("first obj is: \n", myFriend1);
console.log("\nfirst obj gender is: \n", myFriend1.gender);

let myFriend2 = new newPersonObj("Sarah", 25, "Honolulu", false, ["sam"]);
console.log("\n\n\n\nsecond obj is:", myFriend2);
console.log("\nsecond obj gender is:", myFriend2.gender);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function person(fullName) {
  this.fullName = fullName;
}
let person1 = new person("Satoshi");

//Add function as new property
person1.__proto__.__proto__.printHello = function () {
  console.log("Hello");
};
person1.printHello(); //This now works and prints hello

//Add constant as new property
person1.__proto__.__proto__.globalconstant = true;
console.log(person1.globalconstant); //This now works and is "true"

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// global scope
//

let a = "Fred Flinstone";
function alpha() {
  console.log(a);
}
alpha(); // 'Fred Flinstone'

///////////////////////////////////////////////////////////////

let b = "Wilma Flintstone";
window.b = "Betty Rubble";
console.log(b); // 'Betty Rubble'

///////////////////////////////////////////////////////////////

let b = "Wilma Flintstone";
b = "Betty Rubble";
console.log(b); // 'Betty Rubble'

///////////////////////////////////////////////////////////////

let app = {}; // Cria o objeto global de nome 'app'
app.foo = "Homer";
app.bar = "Marge";
function beta() {
  console.log(app.bar);
}
beta(); // 'Marge'

///////////////////////////////////////////////////////////////

global.foobar = "Hello World!"; // A variável 'foobar' é global no 'NodeJS'
console.log(foobar); // Hello World!

///////////////////////////////////////////////////////////////

function gamma() {
  c = "Top Cat";
}
gamma();
console.log(c); // 'Top Cat'
console.log(window.c); // 'Top Cat'

///////////////////////////////////////////////////////////////

//
// local scope
//

let a = "Daffy Duck"; // A variável 'a' tem escopo global
function delta(b) {
  // O parâmetro 'b' tem escopo local à 'function delta(b)'
  console.log(b);
}
function epsilon() {
  // A variável 'c' tem escopo local à 'function epsilon()'
  let c = "Bugs Bunny";
  console.log(c);
}
delta(a); // Daffy Duck
epsilon(); // Bugs Bunny
console.log(b); // O valor de 'b' é 'undefined' para o escopo global

///////////////////////////////////////////////////////////////

let d = "Tom";
function zeta() {
  if (d === undefined) {
    let d = "Jerry";
  }
  console.log(d);
}
zeta();

///////////////////////////////////////////////////////////////

let d = "Tom";
function zeta() {
  let d;
  if (d === undefined) {
    d = "Jerry";
  }
  console.log(d);
}
zeta();

///////////////////////////////////////////////////////////////

//
// block scope
//

function eta() {
  let a = "Scooby Doo";
}
eta();

///////////////////////////////////////////////////////////////

for (let b = 0; b < 5; b++) {
  if (b % 2) {
    console.log(b);
  }
}
console.log(b); // 'ReferenceError: b is not defined'

///////////////////////////////////////////////////////////////

let d = "Tom";
function zeta() {
  if (d === undefined) {
    let d = "Jerry";
  }
  console.log(d);
}
zeta();

///////////////////////////////////////////////////////////////

function theta() {
  console.log(e); // Outputs 'undefined'
  console.log(f); // 'ReferenceError: d is not defined'
  let e = "Wile E. Coyote";
  let f = "Road Runner";
}
theta();

///////////////////////////////////////////////////////////////

//
// browsers
//

let g = "Pinky";
let h = "The Brain";
console.log(window.g); // 'Pinky'
console.log(window.h); // 'undefined'

///////////////////////////////////////////////////////////////

//
// NodeJS
//

global.g = "Pinky";
let h = "The Brain";
console.log(global.g); // 'Pinky'
console.log(global.h); // 'undefined'

///////////////////////////////////////////////////////////////

//
// const
//

if (true) {
  const a = "Count Duckula";
  console.log(a); // 'Count Duckula'
}
console.log(a); // 'ReferenceError: a is not defined'

///////////////////////////////////////////////////////////////

const b = "Danger Mouse";
b = "Greenback"; // 'TypeError: Assignment to constant variable'

///////////////////////////////////////////////////////////////

const c = ["Sylvester", "Tweety"];
c = ["Tom", "Jerry"]; // 'TypeError: Assignment to constant variable'

///////////////////////////////////////////////////////////////

const d = ["Dick Dastardly", "Muttley"];
d.pop();
d.push("Penelope Pitstop");
Object.freeze(d);
console.log(d); // ["Dick Dastardly", "Penelope Pitstop"]
d.push("Professor Pat Pending"); // Throws error

///////////////////////////////////////////////////////////////

//
// global + local scope
//

let a = "Johnny Bravo"; // Global scope
function iota() {
  let a = "Momma"; // Local scope
  console.log(a); // 'Momma'
  console.log(window.a); // 'Johnny Bravo'
}
iota();
console.log(a); // 'Johnny Bravo'

///////////////////////////////////////////////////////////////

let globals = {};
globals.a = "Johnny Bravo"; // Global scope
function iota() {
  let a = "Momma"; // Local scope
  console.log(a); // 'Momma'
  console.log(globals.a); // 'Johnny Bravo'
}
iota();
console.log(globals.a); // 'Johnny Bravo'

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Declaração de Função (Função Regular)
function greet1(who) {
  return `Hello, ${who}!`;
}
console.log(greet1("João")); // Hello, João!

// Expressão de Função (Função Regular)
const greet2 = function (who) {
  return `Hello, ${who}!`;
};
console.log(greet2("Maria")); // Hello, Maria!

///////////////////////////////////////////////////////////////

// Arrow Function
const greet3 = (who) => {
  return `Hello, ${who}!`;
};
console.log(greet3("Marcio")); // Hello, Marcio!

///////////////////////////////////////////////////////////////

let a = "variável do objeto global (window)";
function myFunction() {
  console.log(this.a);
  console.log(this === window);
}
// chamada simples
myFunction();
//
// SAÍDA
//
//    variável do objeto global (window)
//    true
//

///////////////////////////////////////////////////////////////

const myObject = {
  a: `variável do objeto 'myObject'`,
  method: function () {
    console.log(this.a);
    console.log(this.a === `variável do objeto 'myObject'`);
  },
};

// Invocação de Método
myObject.method();
//
// SAÍDA
//
//    variável do objeto 'myObject'
//    true
//

///////////////////////////////////////////////////////////////

let name = "John";
const person = {
  name: "Nathan",
};
const regularFunction = function (age, gender) {
  console.log(`name: ${this.name}, age: ${age}, gender: ${gender}`);
};
regularFunction.call(person, 25, "male");
regularFunction.apply(person, [25, "male"]);
//
// SAÍDA
//
//
//    name: Nathan, age: 25, gender: male
//    name: Nathan, age: 25, gender: male
//

///////////////////////////////////////////////////////////////

let Pessoa = function (primeiroNome, ultimoNome, idade) {
  this.primeiroNome = primeiroNome;
  this.ultimoNome = ultimoNome;
  this.idade = idade;
};

let francisco = new Pessoa("Francisco", "Alencar", 19);
console.log(francisco); // Pessoa { primeiroNome: 'Francisco', ultimoNome: 'Alencar', idade: 19 }

///////////////////////////////////////////////////////////////

const myObject = {
  a: `variável do objeto 'myObject'`,
  myMethod: function (items) {
    const callback = (item) => {
      console.log(`${item} - ${this.a}`);
    };
    items.forEach((item) => callback(item));
  },
};
myObject.myMethod([1, 2, 3]);
//
// SAÍDA
//
//    1 - variável do objeto 'myObject'
//    2 - variável do objeto 'myObject'
//    3 - variável do objeto 'myObject'
//

///////////////////////////////////////////////////////////////

let name = "John";
const person = {
  name: "Nathan",
};
const arrowFunction = (age, gender) => {
  console.log(`name: ${this.name}, age: ${age}, gender: ${gender}`);
};
arrowFunction.call(person, 25, "male");
arrowFunction.apply(person, [25, "male"]);
//
// SAÍDA
//
//
//    name: John, age: 25, gender: male
//    name: John, age: 25, gender: male
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// // let a1 = String(null);
// // let a2 = String(undefined);
// // console.log(`${a1} -> ${typeof a1}`); // null -> number
// // console.log(`${null} -> ${typeof null}`); // null -> object
// // console.log(`${a2} -> ${typeof a2}`); // undefined -> string
// // console.log(`${undefined} -> ${typeof undefined}`); // undefined -> undefined

// function b1() {
//   return null;
// }
// console.log(`${b1} -> typeof: ${typeof b1}`);
// console.log();

// //
// // function b1() {
// //   return null;
// // } -> typeof: functions
// //

// console.log(`${b1} -> iinstance of Function: ${b1 instanceof Function}`);
// console.log();
// //
// // function b1() {
// //   return null;
// // } -> instance of Function: true
// //

// console.log(`${b1} -> iinstance of Object: ${b1 instanceof Object}`);
// console.log();
// //
// // function b1() {
// //   return null;
// // } -> instance of Object: true
// //

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const firstString = '2 + 2'; // Creates a string literal value
// const secondString = new String('2 + 2'); // Creates a String object
// console.log(eval(firstString)); // Returns the number 4
// console.log(eval(secondString)); // Returns a String object containing "2 + 2"

// let strObject = new String('Otávio');
// console.log(strObject + ' -> ' + typeof strObject ); // Otávio -> object

// let strPrimitive = String('Otávio');
// console.log(strPrimitive + ' -> ' + typeof strPrimitive ); // Otávio -> string

// let curso = "Full Stack na Digital College";
// console.log(typeof curso);

// const ownPropertyNames = Object.getOwnPropertyNames(curso);
// console.log(ownPropertyNames);

// const keys = Object.keys(curso);
// console.log(keys);

// console.log("Full Stack na Digital College".valueOf());

// console.log(Object.getPrototypeOf("Full Stack na Digital College"));

// console.log(Object.getPrototypeOf(curso));

// //
// //  https://www.tech-wiki.online/en/how-to-list-object-methods-javascript.html
// //

// const getMethods = (obj) => {
//   let properties = new Set();
//   let currentObj = obj;
//   do {
//     Object.getOwnPropertyNames(currentObj).map((item) => properties.add(item));
//   } while ((currentObj = Object.getPrototypeOf(currentObj)));
//   return [...properties.keys()].filter(
//     (item) => typeof obj[item] === "function"
//   );
// };

// console.log(getMethods(curso));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  array.forEach((entry) => {
    this.sum += entry;
    ++this.count;
  });
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
