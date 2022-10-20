<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label>Digite uma fruta</label>
    <input type="text" id="fruta" placeholder="Digite uma fruta"/>
    <button onclick="add(comomostrar)">Inserir</button>
    <label>Lista:</label>
    <input id="linha" type="checkbox">
    

    <div id="dados">

    </div>
    <script>
        var frutas = []
        function add(callback){
            var x = document.getElementById("fruta")
            if(x.value ==""){
                alert("informe fruta")
                x.focus()
                return
            }
            frutas.push(x.value)
            x.value=""
            x.focus()
            callback()
        }



             function mostraremparagrafo(){
                 var paragrafo = '<ol>'
                    for(let i=0; i < frutas.length; i++){
                        paragrafo += `<td>${frutas[i]}</td>`
                    }
                    paragrafo +='</ol>'
                    document.getElementById("dados").innerHTML = paragrafo;
            }

            
    </script>
</body>
</html>