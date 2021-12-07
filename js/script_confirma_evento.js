document.addEventListener('DOMContentLoaded',function(){

    main = document.querySelector('.aba-evento')
    confirmar = document.querySelector('.botao_confirmar')
    
    confirmar.addEventListener('click', function(){
        caixa = document.createElement('div')
        caixa.classList.add('caixa')

        certeza = document.createElement('h2')
        certeza.innerHTML = 'Tem certeza que quer confirmar presença?'

        botaocerteza = document.createElement('div')
        botaocerteza.innerHTML = 'Confirmar'
        botaocerteza.classList.add('botao_confirmar')

        botaonao = document.createElement('div')
        botaonao.innerHTML = 'Não'
        botaonao.classList.add('botao_confirmar')
        
        main.append(caixa)
        caixa.append(certeza)
        caixa.append(botaocerteza)
        caixa.append(botaonao)

        botaocerteza.addEventListener('click',function(){
            Url = 'index.html'

            document.location.href = Url;

        })

        botaonao.addEventListener('click',function(){
            caixa.style.visibility = 'hidden'
            
        })
    })
})