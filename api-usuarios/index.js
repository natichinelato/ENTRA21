
const express = require('express')
const app = express()
const usuarios = require("./usuario")
const cors = require('cors')

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/usuario', usuarios)

app.listen(port, () => {
  console.log(`executando em http://localhost:${port}`)
})


