const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let timer = null

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const h = String(horas).padStart(2, '0');
    const m = String(minutos).padStart(2, '0');
    const s = String(segundosRestantes).padStart(2, '0');

    return `${h}:${m}:${s}`;
}
function atualizarRelogio() {
    relogio.textContent = formatarTempo(segundos);
}

function iniciarTimer() {

    if (timer) return

    timer = setInterval(() => {
        segundos++
        atualizarRelogio()
        relogio.classList.add('color-black')
    }, 1000)
}

function pausarTimer() {
    clearInterval(timer)
    timer = null
    relogio.classList.remove('color-black')
    relogio.classList.add('color-red')
}

function zerarTimer() {
    pausarTimer()
    segundos = 0
    atualizarRelogio()
    relogio.classList.remove('color-red')
}

iniciar.addEventListener('click', iniciarTimer)
pausar.addEventListener('click', pausarTimer)
zerar.addEventListener('click', zerarTimer)