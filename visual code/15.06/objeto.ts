interface fornecedor {
    id: number
    nome: string
    email: string
    fone: string
    cpf: (string | number)
}

var fornecedor: fornecedor = {id:0, nome:'', email:'', fone:'', cpf:''}

fornecedor.id = 10
fornecedor.nome = 'antartica'
fornecedor.email = 'p@gmail.com'
fornecedor.fone  = '12020'
fornecedor.cpf = 123

