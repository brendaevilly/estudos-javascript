var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()

console.log(`Horário atual: ${hora}:${minuto}:${segundo}`)

if(hora < 12){
    console.log('Bom dia!')
}else{
    if(hora >= 12 && hora <18){
        console.log('Boa tarde!')
    }else{
        console.log('Boa noite!')
    }
}