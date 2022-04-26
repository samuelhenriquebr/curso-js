/*
Primitivos - string, number, boolean, undefined, null (bigint, symbol) - Valor copiados

Referência (mutável) - array, object, function - Passados por referência
*/
/* let nome ='Samuel';
nome[0] = 'R';
console.log(nome[0], nome); */
/* 
let a = 'A';
let b =a; // Cópia
console.log(a, b); 

a = 'Outra coisa';
console.log(a,b); */
/* 
let a = [1,2,3];
let b = [...a];
let c = b;
console.log(a,b,c);

a.push(4);

console.log(a,b,c);

b.pop();

a.push('Samuel');
console.log(a,b,c); */

const a = {
    nome: 'Samuel',
    sobrenome: 'Henrique'
};
const b = {...a};
a.nome = 'Lucas';
console.log(a);
console.log(b);
