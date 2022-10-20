const express = require('express')
const app = express()
var cors = require('cors')
var pg = require('pg');
var conString = "postgres://postgres:123456@localhost/estacionamento";
const pool = new pg.Pool({ connectionString: conString })
app.use(cors())

app.get('/conectar', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        return res.status(200).send({
            message: "conectado com sucesso"
        })

    })

})

app.get('/clientes', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            release()
            res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }
        client.query('select*from categoria', (error, result) => {
            release()
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })

    })
})
app.get('/clientes/:idcliente', (req, res) => {
    /*  res.status(200).send("busca cliente por id" + req.params.idcliente)*/
    pool.connect((err, client, release) => {
        if (err) {
            release()
            res.status(401).send({
                messagem: "erro de conexão",
                erro: err.message
            })
        }


        client.query(`select*from categoria WHERE id=${req.params.idcliente}`, (error, result) => {
           
            












































































































































































































































































































































































































































            
            if (error) {
                return res.status(500).send({
                    message: "ocorreu erro na consulta",
                    erro: error.message
                })

            }
            if (result.rows.length > 0) {
                return res.status(200).send(result.rows[0])

            } else {
                return res.status(404).send({
                    message: "id não existe",
                    erro: 404
                })
            }


        })

    })

})
    app.listen(8080, () => console.log
        ('Executando em http://localhost:8080'))