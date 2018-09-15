;(function(){
    
    const form = document.querySelector('form.formNovoCartao');

    form.addEventListener('submit', function(event){

        event.preventDefault();
        const conteudoCartao = this.querySelector('textarea').value.trim()

        if(conteudoCartao){
            
            adicionaCartaoNoMural({conteudo: conteudoCartao});
            
            this.reset(); //limpa o form
        }
        else {
            const msgErro = document.createElement('p');

            msgErro.classList.add('formNovoCartao-msg');
            msgErro.textContent = 'Preencha alguma coisa no campo de texto!';

            this.insertAdjacentElement('afterbegin', msgErro)            
        }   
    })
    
    form.classList.remove('no-js');
    
    
})()