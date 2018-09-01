//busca o botao linhas e blocos
let btn = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');


//Constante que guarda uma função anonima
const mudaTexto = function(){

    //se tiver linhas muda pra bloco, se tiver bloco muda pra linha
    
    if(this.innerText == 'Linhas'){
        this.innerText = 'Blocos';
    }
    else {
        this.innerText = 'Linhas';
    }

} 

const mudaLayout = function(){
    mural.classList.toggle('mural--linha')
}

//Named Function Expression
//o problema que é se alguem cria uma variavel com o mesmo nome da função, eu perco a função.
/* 
function mudaTexto(){
    console.log('clicou');   
} 
*/

btn.addEventListener('click', mudaTexto)
btn.addEventListener('click', mudaLayout)

btn.classList.remove('no-js')
