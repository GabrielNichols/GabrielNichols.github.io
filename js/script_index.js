document.addEventListener('DOMContentLoaded',function(){
    criacao = sessionStorage.getItem('evento')

    ul = document.querySelector('ul')
    if (criacao == '1') {
        
        conttitulo = 'EventoCriado'
        contdata = 'DATA'
        contlocal = 'localização'

        evento = document.createElement('li')

        titulo = document.createElement('p')
        titulo.classList.add('evento')
        titulo.innerHTML = conttitulo

        foto = document.createElement('img')
        foto.src = 'img/foto_evento.png'
        foto.alt = "foto do evento"
        foto.classList.add('imagem-evento')

        data = document.createElement('p')
        data.classList.add('data')
        data.innerHTML = contdata

        local = document.createElement('p')
        local.classList.add('local')
        local.innerHTML = contlocal




        
        
        
        ul.append(evento)
        evento.append(titulo)
        evento.append(foto)
        evento.append(data)
        evento.append(local)

        sessionStorage.setItem('evento', '0')
    }
})