export default class empregado{
    nome: string
    valorhora:number
    totalsemanal: number

    constructor(nome: string, valorhora: number , totalsemanal: number){
        this.nome = nome
        this.valorhora = valorhora
        this.totalsemanal = totalsemanal
    }
     
    calculasalario(): number{
    return parseFloat((this.valorhora*this.totalsemanal).toFixed(2))
}
    imprimedados(): void{
        console.log(`Nome: ${this.nome}`)
        console.log(`Valor R$: ${this.valorhora}`)
        console.log(`Horas Semana: ${this.totalsemanal}`)
        console.log(`Salario reais: ${this.calculasalario()}`)
    }

}