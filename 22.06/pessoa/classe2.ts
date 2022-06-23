 class pessoa{
 id: number
 nome: string
 fone: number
 email:  string
 peso: number
 altura: number

 constructor(id:number , nome:string, fone: number, email: string , peso: number, altura: number){
 this.id = id 
 this.nome = nome
 this.fone = fone
 this.email = email 
 this.peso = peso
 this.altura = altura
 }
 
 salvar(): void{
     console.log("Salvo com sucesso")
  }
  validar(): void{
    if(this.id == 0){
        console.log("Insira id")
    }else if(this.nome == ""){
        console.log("Insira nome")
    }else if(this.fone == 0){
        console.log("Insira fone")
    }else(this.email =="");{
        console.log("Insira email")
    }
    
}

     imprimi(): void{
        console.log(`ID: ${this.id}`)
        console.log(`NOME: ${this.nome}`)
        console.log(`FONE: ${this.fone}`)
        console.log(`EMAIL: ${this.email}`)
        console.log(`IMC: ${this.calcularimc()}`)
        console.log('')
  }

  calcularimc():number{
    let imc:string = (this.peso/(this.altura*this.altura)).toFixed(2);
    return parseFloat(imc)

}
}

export default pessoa