function playSonido(IdElementoAudio) {
    document.querySelector(IdElementoAudio).play();
}
 
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0 

for (let contador = 0 ; contador < listaDeTeclas.length  ; contador++ ) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    console.log(instrumento)
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio)
    };

    tecla.onkeydown = function(evento){
        console.log(evento.code === 'Space' || evento.code === 'Enter')
        if (evento.code === 'Space') {
            tecla.classList.add('activa')
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa')
    }

}

console.log('vuelta ' + contador);



/* con la constante tecla que es la listadeteclas[contador] y usando la classlist seleccionamos la segujnda clase, y ahora en la constante de idAudio al usar la id de sonido y la de instrumento le decimos que de audio tome la segunda id  */
/* 
while (contador < 9) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    console.log(instrumento)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio)
    };
    contador = contador + 1 ;
    console.log('vuelta ' + contador);
}

Codigo funcional para poner sonidos  */ 