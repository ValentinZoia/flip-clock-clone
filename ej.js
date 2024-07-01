/*--------EJERCICIO OBJETO DATE---------*/

let t = document.querySelector('.time');
let ct = document.querySelectorAll('.ctn');
let ctW = document.querySelector('.container-h').offsetWidth;
let lw = document.querySelectorAll('.line');
let rlj = document.querySelectorAll('.number');


/*
----Intento de responsive---
    -1 poner mismo width de container a line
        for(i=0; i<lw.length;i++){
            lw[i].style.width = `${ctW}px`;
        }

    -2 modificar el tamaño de letra de la hora segun el tamaño de el contenedor abuelo.
        for(i=0; i<rlj.length;i++){
            rlj[i].style.fontSize = `${ctW - (ctW*30/100)}px`; 
        }

    -3 modificar el height de t al mismo que ctw para formar un cuadrado
        t.style.height = `${ctW}px`;
*/

const addZeros = n=>{
    let rta = n.toString().length < 2 ? `0${n}` : n;
    return rta;
}

const actualizarHora =()=>{
    const time = new Date;
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector('.h').innerHTML = hora;
    document.querySelector('.m').innerHTML = min;
    document.querySelector('.s').innerHTML = seg;
    
}
actualizarHora();
setInterval(actualizarHora,1000);







