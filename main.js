function tocarSom(seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if (element === null) {
        alert('Elemento não encontrado.');
        console.log('Elemento não encontrado.')
    }

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        alert('Elemento não encontrado.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    console.log(contador); //1º log

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //2º log
    console.log(instrumento)

    const idAudio = `#som_${instrumento}`; //template string = $ nas crases (``)
    //3º log
    console.log(idAudio)

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}