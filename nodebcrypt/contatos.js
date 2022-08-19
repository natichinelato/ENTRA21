var express = require('express')
var router = express.Router()
const pg = require('pg')
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

router.get('/', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.send({
                message: 'Conexão não autorizada',
                erro: err.message
            })
        }
        client.query('select * from contato', (error, result) => {
            if (error) {
                return res.send({
                    message: 'Erro ao selecionar contato',
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
        release()
    })
})

router.get('/:idcontato', (req, res) => {
    res.send({
        message: 'Pagina de consulta de contato por id',
        idpesquisado: req.params.idcontato
    })
})

router.post('/', (req, res) => {
    pool.connect((err, client, release) => {
        var sql = "insert into contato(nome, fone, email)values($1,$2,$3)"
        var dados = [req.body.nome, req.body.fone, req.body.email]
        client.query(sql, dados, (error, result) => {
            return res.status(201).send({
                message: 'Contato criado com sucesso'
            })
        })
        release()
    })
})

router.put('/:idcontato', (req, res) => {
    var obj = {
        id: req.body.id,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    res.status(200).send({
        message: 'contato alterado com sucesso',
        idalterado: req.params.idcontato,
        contatoalterado: obj
    })
})

router.delete('/contatos/:idcontato', (req, res) => {
    pool.connect((err, client, release) => {
        var sql = 'delete from contato where id = $1'
        client.query(sql, [req.params.idcontato], (error, result) => {
            return res.send({
                message: 'contato excluido com sucesso',
                idcontato: req.params.idcontato
            })
        })
        release()
    })

})

module.exports = router