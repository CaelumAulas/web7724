//IIFE Immediately invoked function expression
;(function(){

    const btn = document.querySelector('.opcoesDoCartao-remove')

    btn.onclick = function(){
        console.log(this,'remover');
    }


})()