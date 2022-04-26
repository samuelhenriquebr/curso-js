/* 
Entre 0 - 11 - Bom dia
Entre 12 - 17 -  Boa tarde
Entre 18 -23 - Boa Noite
*/

// if Pode ser usado sozinho
// Sempre que utilizo a palavr else, preciso de um if antes
// Posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos utilizar condições com if e else, sem else if

const hora = 50;

if (hora >= 0  && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá');
}