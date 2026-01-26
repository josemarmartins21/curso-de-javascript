
var msg = document.getElementById('msg')
msg.addEventListener('load', carregar())
// Cores
// #FDF5F3 
// #F6DDA0
// #BB8B12
function carregar() {
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'images/manha.jpg'
        document.body.style.background = '#e2cd9f '
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'images/noite.jpg'
        document.body.style.background = '#515154'
    }
}