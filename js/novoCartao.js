;(function(){
    'use cartao'
    let numeroCartao = 0;

    window.adicionaCartaoNoMural = function (objetoCartao) {    

        const novoCartao = document.createElement('article'),
              listaCartoes = document.querySelectorAll('.cartao')
             // numeroCartao = `${listaCartoes.length + 1}`;
    
        novoCartao.innerHTML = `
                <div class="opcoesDoCartao">
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg><use xlink:href="#iconeRemover"></use></svg>
                    </button>
    
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                        Padrão
                    </label>
    
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                        Importante
                    </label>
    
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                        Tarefa
                    </label>
    
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                        Inspiração
                    </label>        
                </div>
                <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
                `;
    
        novoCartao.id = `cartao_${numeroCartao}`;
        novoCartao.tabIndex = 0;
        novoCartao.classList.add('cartao');
    
        novoCartao.addEventListener('focusin', function (evento) {
            this.classList.add('cartao--focado')
        });
    
        novoCartao.addEventListener('focusout', function () {
            this.classList.remove('cartao--focado')
        });
    
        novoCartao.addEventListener('change', function (evento) {
            //o contains retorna "true" ou "false" se tiver ou não a classe
            let isRadioTipo = evento.target.classList.contains('opcoesDoCartao-radioTipo')
    
            if (isRadioTipo) {
                this.style.backgroundColor = evento.target.value
            }
    
        });
    
        novoCartao.addEventListener('keydown', function (evento) {
            let isLabel = evento.target.classList.contains('opcoesDoCartao-opcao');
    
            if (isLabel && evento.code == 'Enter' || evento.code == 'Space') {
                evento.target.click()
            }
        });
    
        novoCartao.addEventListener('click', function (evento) {
            let isLixeira = evento.target.classList.contains('opcoesDoCartao-remove');
    
            if (isLixeira) {
                this.classList.add('cartao--some')
                this.addEventListener('transitionend', function () {
                    this.remove();
                })
            }
    
        });
    
        if(objetoCartao.cor){
            //muda a cor do article de acordo com recebida do objeto por parametro
            novoCartao.style.backgroundColor = objetoCartao.cor;
    
            //seleciona o input que tiver o mesmo value da cor passada por parametro
            let input = novoCartao.querySelector(`[value='${objetoCartao.cor}']`);
    
            //após encontrar o input com aquela cor, checa ele
            input.checked = true;
        }
    
        const mural = document.querySelector('.mural');
    
        mural.insertAdjacentElement('afterbegin', novoCartao);

        numeroCartao++
    }
})()