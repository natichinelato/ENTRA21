var numeros = [10 ,5 ,50 ,60 ,800 , 15, -1] 


    var trocou = true
    while(trocou){
        trocou=false
    
    for(let i=0; i < numeros.length; i++){
        if(numeros[i] > numeros[i+1]){
            let aux = numeros[i]
            numeros[i] = numeros[i+1]
            numeros[i+1]=aux
            trocou=true
        }
    }
    
console.log(numeros.toString())
}
