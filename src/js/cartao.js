;(function(){

    const cartoes = document.querySelectorAll('.cartao');

    for(let indice = 0; indice < cartoes.length; indice++ ){
        
        const cartao = cartoes[indice];

        cartao.addEventListener('focusin', function(evento){
            this.classList.add('cartao--focado')
        });

        cartao.addEventListener('focusout', function(){
            this.classList.remove('cartao--focado')
        });
        
        cartao.addEventListener('change', function(evento){
            /* 
            evento (detalhes do evento)
            evento.target (guarda a referencia do elemento que emitiu o evento)
            evento.target.value (acessa o value o elemento que emitiu o evento) 
            */

            //o contains retorna "true" ou "false" se tiver ou não a classe
            let isRadioTipo = evento.target.classList.contains('opcoesDoCartao-radioTipo')
            
            if(isRadioTipo){
                this.style.backgroundColor = evento.target.value
            }        

        });

        cartao.addEventListener('keydown', function(evento){
            let isLabel = evento.target.classList.contains('opcoesDoCartao-opcao');

            if(isLabel && evento.code == 'Enter' || evento.code == 'Space' ){
                evento.target.click()
            }
        });

        cartao.addEventListener('click', function(evento){
            let isLixeira = evento.target.classList.contains('opcoesDoCartao-remove');

            if(isLixeira){
                this.classList.add('cartao--some')
                this.addEventListener('transitionend', function(){
                    this.remove();
                })
            }

        });
    }

})()