function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if(elemento && elemento.localName === 'audio') {
        elemento.play()
    } else {
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1]
    tecla.onclick = () => {
        tocaSom(`#som_${instrumento}`)
    }

    tecla.onkeydown = (evento) => {
        if(evento.key === 'Enter' || evento.key === ' '){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = (evento) => {
        if(evento.key === 'Enter' || evento.key === ' '){
            tecla.classList.remove('ativa')
        }
    }

    
}
