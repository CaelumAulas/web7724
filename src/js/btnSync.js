;(function(){

    const btn = document.querySelector('#btnSync');

    btn.addEventListener('click',function(){

        this.classList.add('botaoSync--esperando');
        this.classList.remove('botaoSync--sincronizado');
        
        //lista vazia, que espera receber os objetos dos cartoes
        let listaDeObjetosCartoes = [];

        const listaElementosCartoes = document.querySelectorAll('.cartao')

        //percorrer a lista de elementos cartao, for
        for(let cartao of listaElementosCartoes){
            //localizar: o conteudo, e a cor do cartao, 
            
            let conteudo = cartao.querySelector('.cartao-conteudo').textContent;
            //let cor = cartao.querySelector('input:checked').value

            let cor = getComputedStyle(cartao).getPropertyValue('background-color');

            //criar 1 objeto {} conteudo e cor
            let objetoCartao = {
                conteudo: conteudo,
                cor: cor
            }
    
            //inserir o objeto na listaDeObjetosCartoes com o push
            listaDeObjetosCartoes.push(objetoCartao)
        }//fim do for

        let dadosUser = {
            usuario: 'vanessa',
            cartoes: listaDeObjetosCartoes
        }

        const conexaoApi = new XMLHttpRequest();
        conexaoApi.open('POST','http://ceep.herokuapp.com/cartoes/salvar/');

        //padrao HTTP, preciso avisar a API o tipo do conteudo que estou enviando
        conexaoApi.setRequestHeader('Content-Type','application/json');
        
        conexaoApi.send(JSON.stringify(dadosUser));

        //qdo recebemos a resposta do servidor...
        conexaoApi.addEventListener('load', () => {
            let resposta = JSON.parse(conexaoApi.response);

            this.classList.remove('botaoSync--esperando');
            this.classList.add('botaoSync--sincronizado');

            console.log(`${resposta.quantidade} cartoes de ${resposta.usuario} gravados com sucesso!`);
        })

        conexaoApi.addEventListener('error', () => {
            this.classList.add('botaoSync--deuRuim');
            this.classList.remove('botaoSync--esperando');
        })
    })

    btn.classList.remove('no-js');
})()

//arrow function
const minhafuncao = (teste, param2) => {

}

minhafuncao('aaa', 'bbbb')
