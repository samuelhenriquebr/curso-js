function imc () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    console.log(form);
    console.log(resultado);

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        

        console.log(peso.value);
        console.log(altura.value);
       
        const medidas = {
            peso: parseFloat(peso.value),
            altura: parseFloat(altura.value)
        };

        console.log(`peso: (${medidas.peso})`);
        console.log(`altura: (${medidas.altura})`);

        console.log(typeof medidas.peso);
        console.log(typeof medidas.altura);

        const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2);
        console.log(imc);


        let grauObesidade;
        let texto;
        let isValid =true;;

        console.log((medidas.peso));
        console.log((medidas.altura));

        if(!medidas.peso){
            texto = `Peso inválido`;
            isValid = false;
            console.log((isValid));
        }  else if(!medidas.altura){
            texto = `Altura inválida`;
            isValid = false;
            console.log((isValid));
        }else if(imc < 18.5){
            grauObesidade = "Abaixo do peso"
            texto = `Seu IMC é ${imc.toFixed(2)} (${grauObesidade})`;
            isValid = true;
            console.log((isValid));
        } else if(imc >= 18.5 && imc <= 24.9){
            grauObesidade = "Peso Normal"
            texto = `Seu IMC é ${imc.toFixed(2)} (${grauObesidade})`;
            isValid = true;
            console.log((isValid));
        } else if(imc >= 25 && imc <= 29.9){
            grauObesidade = "Sobrepeso"
            texto = `Seu IMC é ${imc.toFixed(2)} (${grauObesidade})`;
            isValid = true;
            console.log((isValid));
        } else if(imc >= 30 && imc <= 34.9){
            grauObesidade = "Obesidade grau 1"
            texto = `Seu IMC é ${imc.toFixed(2)} (${grauObesidade})`;
            isValid = true;
            console.log((isValid));
        } else if(imc >= 35 && imc <= 39.9){
            grauObesidade = "Obesidade grau 2"
            texto = `Seu IMC é ${imc.toFixed(2)} (${grauObesidade})`;
            isValid = true;
            console.log((isValid));
        } else if(imc >= 40){
            grauObesidade = "Obesidade grau 3"
            texto = `Seu IMC é ${imc.toFixed(2)} (${grauObesidade})`;
            isValid = true;
            console.log((isValid));
        }

        console.log(texto)
        if (isValid){
            console.log((isValid));
            resultado.classList.add('paragrafo-resultado');
        } else if (!isValid){
            console.log((isValid));
            resultado.classList.add('bad');
        }
        resultado.innerHTML = texto;
    }

    form.addEventListener('submit', recebeEventoForm);
}

imc ();