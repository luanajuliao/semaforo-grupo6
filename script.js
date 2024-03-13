const $luzesDoCirculo = document.querySelectorAll('.luz-circulo');
let contadorDeLuz = 0;
let intervalo;
let semaforo = 0;

// Carregar os áudios
let audioAtravesse = new Audio('audio/Atravesse.mp3');
let audioAtenção = new Audio('audio/Atenção.mp3');
let audioEspere = new Audio('audio/Espere.mp3');

function on() {
    if (semaforo == 0) {
        semaforo = 1;
    } else {
        semaforo = 0;
    }
}

const mostrarLuz = () => {
    // Parar todos os áudios antes de trocar de cor
    audioAtravesse.pause();
    audioAtenção.pause();
    audioEspere.pause();

    $luzesDoCirculo[contadorDeLuz].className = 'luz-circulo';
    contadorDeLuz--;

    if (contadorDeLuz < 0) contadorDeLuz = 2;

    const luzAtual = $luzesDoCirculo[contadorDeLuz];
    luzAtual.classList.add(luzAtual.getAttribute('color'));

    // Reproduzir o áudio correspondente à cor atual
    if (luzAtual.classList.contains('green')) {
        audioAtravesse.play();
    } else if (luzAtual.classList.contains('yellow')) {
        audioAtenção.play();
    } else if (luzAtual.classList.contains('red')) {
        audioEspere.play();
    }
}

const boton = document.getElementById('button');
boton.addEventListener('click', () => {
    if (semaforo == 1) {
        clearInterval(intervalo);
        $luzesDoCirculo.forEach(luz => luz.classList.remove('green', 'yellow', 'red'));
        $luzesDoCirculo[0].classList.add('red');
        semaforo = 0;
        boton.textContent = 'Ligar';
        boton.classList.remove('button'); // remova a classe de estilo para desligado
        boton.classList.add('button'); // adicione a classe de estilo para desligado
    } else {
        intervalo = setInterval(mostrarLuz, 4000); // Mudança de cor a cada x segundos
        semaforo = 1;
        boton.textContent = 'Desligar';
        boton.classList.remove('button'); // remova a classe de estilo para desligado
        boton.classList.add('button'); // adicione a classe de estilo para desligado
    }
});
