alert('Com a nossa mensagem.');
let num1 = prompt('Digite um número');
let num2 = prompt('Digite um número');

console.log(num1, num2);
console.log( typeof num1, typeof num2);

num1 = parseFloat(num1);
num2 = parseFloat(num2);

alert(`O resultado da operação foi ${num1 + num2}`);
