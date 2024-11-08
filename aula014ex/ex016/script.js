function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if(ini.value.length == 0 || fim.value.length == 0 || fim.value.length == 0){
        window.alert(`[ERROR] Insira algum valor para proseguir!`)
    }else if(i < f){
        res.innerHTML = `Contagem: `

        for(var l=i; l<=f; l+=p){
            res.innerHTML += ` ${l} ⇨`
        }
    }else if(i > f){
        res.innerHTML = `Contagem: `

        for(var l=i; l>=f; l-=p){
            res.innerHTML += ` ${l} ⇨`
        }
    }

    res.innerHTML += ` \u{1F3F3}`
    
}