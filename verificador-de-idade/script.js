var botao = document.getElementById('botao')

botao.addEventListener('click', verificar)
function verificar() {
    var data = new Date()
    var ano_actual = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length === 0 || fano.value > ano_actual) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano_actual - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/menino.jpg')
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute('src', 'images/jovem-homem.jpg')
            } else if (idade > 21 && idade < 55) {
                img.setAttribute('src', 'images/senhor.jpg')
            } else {
                img.setAttribute('src', 'images/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/menina.jpg')
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute('src', 'images/jovem-mulher.jpg')
            } else if (idade > 21 && idade < 55) {
                img.setAttribute('src', 'images/senhora.jpg')
            } else {
                img.setAttribute('src', 'images/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${genero} com <span style='color: rgba(3, 18, 46, 0.83);'>${idade}</span> anos</strong>`
        res.appendChild(img)

    }
    
    
}