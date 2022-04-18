// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços. Utilizamos camelCase
// Case-sensitive
// não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.
const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta * 2;
let resultadoTriplicado = conta * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));