const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const bgColorBody = estilosBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = bgColorBody === 'rgb(148, 66, 66)' ? bgColorBody : '#fff'
    p.style.color = '#fff'
}

