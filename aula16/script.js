let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já está na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adcione valores antes de finalizar.')
    }else{
        let tot = valores.length
        let maior = valores[0];
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){        // Verifica cada posição em valores.
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if(valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` 
        res.innerHTML += `<p>Maior valor:  ${maior} | Menor valor ${menor}</p>` 
        res.innerHTML += `<p>Soma dos valores: ${soma} | Media dos valores ${media}</p>`
    }
   

}