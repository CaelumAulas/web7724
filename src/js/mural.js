;(function(){

    $.ajax({
        url: 'http://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: {usuario: 'vanessa'},
        dataType: 'jsonp',
        success: function(objetoResposta){
            let cartoes = objetoResposta.cartoes;

            for(let cartao of cartoes){
                adicionaCartaoNoMural(cartao)
            }

        }
    })

})()