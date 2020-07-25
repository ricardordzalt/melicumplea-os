const btnSoplar = document.getElementById('btn-soplar');
const pastelVelitas = document.getElementById('pastel-velitas');
const pastelSinVelitas = document.getElementById('pastel-sin-velitas');
const alertaVelitas = document.getElementById('alerta-velitas');

let velitasSopladas = false;

const soplarVelitas = () => {
    if(velitasSopladas) {
        return;
    }else {
        pastelVelitas.classList.add('pastel-oculto');
        pastelSinVelitas.classList.remove('pastel-oculto');
        alertaVelitas.innerHTML = "<div class='h2'>¡¡Pide un deseo!!🥳🥳🥳</div>"
        velitasSopladas = true;
    };
}

btnSoplar.addEventListener('click', () => {
    soplarVelitas();
});

btnSoplar.addEventListener('touchend', () => {
    soplarVelitas();
});