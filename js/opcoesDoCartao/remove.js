//IIFE Immediately invoked function expression
;(function(){

    const btns = document.querySelectorAll('.opcoesDoCartao-remove');

    for (let indice = 0; indice < btns.length; indice++ ) {
        
        const btn = btns[indice]

        btn.addEventListener('click', function(){
        
            const cartao = this.parentNode.parentNode;
    
            cartao.classList.add('cartao--some');
    
            cartao.addEventListener('transitionend', function(){
                this.remove();
            })
    
        })

    } 

})()
