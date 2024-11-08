function gerartab(){
    var num = document.querySelector('input#txtn')
    var sel = document.querySelector('select#txttab')

    if(num.value.length == 0){
        alert(`[ERROR] Digite algum número para proseguir!`)
    }else{
        
        var n = Number(num.value)
        sel.innerHTML = ''
        for(var i=0; i<=10; i++){
            var item = document.createElement('option')
            item.text = `${n} * ${i} = ${n*i}`
            item.value = `${i}`
            sel.appendChild(item)
        }
    }
    

}