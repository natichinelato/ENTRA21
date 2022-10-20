function ola(){
    console.log('ola')
}

function tchau(){
    console.log('tchau')

}

function conversa(){
   console.log('tudo bem?')
}
function discussão(){
    console.log('tllllll?')
 }

function testesettimeout(callback,time){
    setTimeout(callback,time)
        
}

ola()
testesettimeout(conversa,5000)
testesettimeout(discussão,3000)
tchau()