const nome = 'Samuel';
const sobrenome = 'Gomes';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

/*
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc);
console.log( nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);
*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log( `${nome} ${sobrenome} nasceu em ${anoNascimento}`);