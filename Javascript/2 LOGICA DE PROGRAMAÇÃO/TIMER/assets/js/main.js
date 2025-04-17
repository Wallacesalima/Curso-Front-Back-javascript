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

    relogio.classList.remove('pausado')
    timer = setInterval(() => {
        segundos++
        atualizarRelogio()
    }, 1000)
}

function pausarTimer() {
    clearInterval(timer)
    timer = null
    relogio.classList.add('pausado')
}

function zerarTimer() {
    pausarTimer()
    segundos = 0
    atualizarRelogio()
    relogio.classList.remove('pausado')
}

document.addEventListener('click', function (e) {
    const elemento = e.target

    if (elemento.classList.contains('iniciar')) {
        iniciarTimer()
    }
    if (elemento.classList.contains('pausar')) {
        pausarTimer()
    }
    if (elemento.classList.contains('zerar')) {
        zerarTimer()
    }
})