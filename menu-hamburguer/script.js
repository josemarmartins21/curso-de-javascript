var botaoMenu = document.getElementById('btn-menu')
var botaoClose = document.getElementById('close')
var menu = document.getElementById('menu')


botaoMenu.addEventListener('click', mostrarMenu)

botaoClose.addEventListener('click', fecharMenu)

window.addEventListener('resize', desaparecer)

function mostrarMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        botaoMenu.style.display = 'none'
        botaoClose.style.display = 'block'
    }
}

function fecharMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        botaoClose.style.display = 'none'
        botaoMenu.style.display = 'block'
    }
}

function desaparecer() {
    if (Number(window.innerWidth) >= 640) {
        menu.style.display = 'block'
        botaoMenu.style.display = 'none'
        botaoClose.style.display = 'none'
    } else {
        botaoMenu.style.display = 'block'
        menu.style.display = 'none'

    }
}

