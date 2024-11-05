function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imag')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(27, 27, 27), grey, #fde8b6)'
    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(27, 27, 27), grey, #fd9008)'
    }else{
        img.src = 'imagens/fotonoite.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(27, 27, 27), grey, #a384bf)'
    }
}