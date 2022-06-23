export default class Produto{
    descricao: string
    valoruni: number
    qtdestoque: number

constructor(descricao: string, valoruni: number, qtdestoque: number){
    this.descricao = descricao
    this.valoruni = valoruni
    this.qtdestoque = qtdestoque
    }

    estoque():number{
        return this.qtdestoque
    }

    precodesconto(): number{
        let taxa:number = 0.2
        return parseFloat((this.valoruni-(this.valoruni*taxa)).toFixed(2))
    }
    precoacrescimo(): number{
        let taxa2:number = 0.2
        return(this.valoruni+(this.valoruni*taxa2))

    }

    imprimi(): void{
        console.log(`Descricao: ${this.descricao}`)
        console.log(`Valoruni: ${this.valoruni}`)
        console.log(`Estoque: ${this.estoque()}`)
        console.log(`desconto: ${this.precodesconto()}`)
        console.log(`acresicmo: ${this.precoacrescimo()}`)

      
        console.log('')

}
}

