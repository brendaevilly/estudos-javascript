function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = document.getElementById('anonasc')
    var res = document.getElementById('res')
    if(ano_nasc.value.length === 0 || ano_nasc.value > ano_atual){
        window.alert('[Error] Ano inválido!')
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano_atual - ano_nasc.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade<=5){
               img.src = 'imagens/bebe-m.png'
            }else if(idade > 5 && idade <= 12){
                img.src = 'imagens/crianca-m.png'
            }else if(idade > 12 && idade <= 29){
                img.src = 'imagens/jovem-m.png'
            }else if(idade > 29 && idade <= 59){
                img.src = 'imagens/adulto-m.png'
            }else{
                img.src = 'imagens/idoso-m.png'
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade<=5){
                img.src = 'imagens/bebe-f.png'
             }else if(idade > 5 && idade <= 12){
                 img.src = 'imagens/crianca-f.png'
             }else if(idade > 12 && idade <= 29){
                 img.src = 'imagens/jovem-f.png'
             }else if(idade > 29 && idade <= 59){
                 img.src = 'imagens/adulta-f.png'
             }else{
                 img.src = 'imagens/idosa-f.png'
             }
        }
    }
    img.style.display = 'block'
    img.style.margin = 'auto'
    img.style.marginTop = '20px'

    res.innerHTML = `Identificamos ${genero} de ${idade} anos!`
    res.appendChild(img)
   
}


