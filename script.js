const $luzesDoCirculo = document.querySelectorAll('.luz-circulo');
let contadorDeLuz = 0;
let intervalo;
let semaforo =0;

function on() {
    if( semaforo == 0){
        semaforo = 1;
    }else{
        semaforo = 0;
    }
}

const mostrarLuz = () =>{
    $luzesDoCirculo[contadorDeLuz].className = 'luz-circulo';
    contadorDeLuz--;

    if(contadorDeLuz < 0) contadorDeLuz = 2;

    const luzActual = $luzesDoCirculo[contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))
}
const boton = document.getElementById('button');
        boton.addEventListener('click', () => {
            if (on == 1 ) {
                clearInterval(intervalo);
                intervalo = null;
                boton.querySelector('button').textContent = 'Ligar';
            } else {
                intervalo = setInterval(mostrarLuz,2000);
                boton.querySelector('button').textContent = 'Desligar';
            }
        });