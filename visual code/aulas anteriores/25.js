function um(){
 console.log("um")   
}

function dois(){
    console.log("dois")
}

um()
dois()

function mostraresultado(result){
    console.log(`Resultado: ${result}`)
    }

function mostraresultado2(result){
    console.log(`Resultado2: ${result}`)

}

function soma(n1,n2){
    let resultado = n1 + n2
    mostraresultado(resultado)
}

soma(10,20)

function soma2(n1,n2, callback){
    let resultado = n1+n1
    callback(resultado)
}

soma(100,200,mostraresultado)
soma(100,200,mostraresultado2)