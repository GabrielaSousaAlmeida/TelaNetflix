const botaoClaro = document.getElementById('botaoClaro') // pegando o valor pelo id.

const body = document.querySelector('body') // atribuido o valor da variavio pela o seletor exm: tec.
// const botaoEscuro = document.getElementById('botaoEscuro')

botaoClaro.addEventListener('click',
    function botaoMudaTela() {
        let corFundo = body.style.backgroundColor;

        // if (body.style.backgroundColor == 'white') {
        //     body.style.backgroundColor = 'black'

        // } else {
        //     body.style.backgroundColor = 'white';
        // }

        body.style.backgroundColor = corFundo === 'white' ? corFundo = 'black' : corFundo = 'white'; // if else ternario 


    }
)