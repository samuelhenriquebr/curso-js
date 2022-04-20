// 
//let umaString = "Um \"texto\"";
let umaString = "Um texto";
//console.log(umaString.charAt(5));
console.log(umaString.concat(' ', 'em', ' ', 'um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

console.log(umaString.lastIndexOf('m', 3));

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/x/));

console.log(umaString.replace(/Um/, 'Outra'));

umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.replace(/ /g, ''));
console.log(umaString.length);
console.log(umaString.slice(2,6));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length -1));

console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());






