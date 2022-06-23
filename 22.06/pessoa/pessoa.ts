//*import pessoa from "./classe2"

import pessoa from "./classe2";

var jose = new pessoa(1 , "jose", 123456, "jose@gmail", 75, 1.75)
var maria = new pessoa(2 , "maria", 123789, "maria@gmail" , 56 , 1.60)

//pessoa1.imprimi()
//pessoa2.imprimi()//

let pessoas: pessoa [] =[]
pessoas.push(jose)
pessoas.push(maria)
pessoas.push(new pessoa(3, "antonia", 234, "anonia@gmail", 65, 1.69))

pessoas.forEach((p) => p.imprimi());
