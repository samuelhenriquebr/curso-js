/* const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
console.log(array); */

/* const pessoa1 = {
    nome: 'Samuel',
    sobrenome: 'Henrique',
    idade: 25
};

const pessoa2 = {
    nome: 'Lucas',
    sobrenome: 'Matos',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

/* function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
} */
/* function criaPessoa(nome, sobrenome, idade){
    return{ nome,sobrenome,idade};
}

const pessoa1 = criaPessoa('Samuel', 'Silva', 27);
const pessoa2 = criaPessoa('Lucas', 'Soares', 33);
const pessoa3 = criaPessoa('João', 'Gomes', 44);
const pessoa4 = criaPessoa('Cesar', 'Rodrigues', 55);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4); */

const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Matos',
    idade: 55,

    fala(){
        // console.log(`${this.nome} ${this.sobrenome} está falando oi`);
        console.log(`A minha idade atual é ${this.idade}`);

    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

