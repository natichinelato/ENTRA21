import * as express from "express"
const app = express()
import users from './usuarios'
import produto from './produtos'

app.use(express.json())
app.use("/user", users)
app.use("/produ", produto)

const PORT = process.env.PORT
app.listen(PORT, ()=> {console.log(`executando em http://localhost:${PORT}`)})
