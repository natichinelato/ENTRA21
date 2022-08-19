import * as express from "express"
import { Request, Response } from "express"
import dataSource from './datasource'
import {User} from './entity/user'


const router = express.Router()

dataSource
.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

router.get("/", async (req: Request, res: Response) => {
    const users = await dataSource.getRepository(User).find()
    res.json(users)

})

router.post('/', async (req: Request, res: Response) =>{
    const user = req.body
    const result = await dataSource.getRepository(User).save(user)
    res.send(result)
      
})

router.put('/:id', async (req: Request, res: Response) =>{
    const user = await dataSource.getRepository(User).findOneBy({id: Number(req.params.id)})
    dataSource.getRepository(User).merge(user, req.body)
    const results = await dataSource.getRepository(User).save(user)
    return res.send(results)
})

router.delete('/:id', async (req: Request, res: Response) =>{
    const user = req.body
    const result = await dataSource.getRepository(User).delete(req.params.id)
    res.send(result)
})

export default router