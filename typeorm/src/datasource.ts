import { DataSource, Entity } from "typeorm"
import { Product } from "./entity/produ"
import { User } from "./entity/user"
import { Profile} from  "./entity/profile"
import { Categoria} from  "./entity/categoria"
import { Usuario } from "./entity/Usuario"
import { Foto } from "./entity/foto"
import { Questao } from "./entity/questoes"
import { Categ } from "./entity/cate"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [User , Product , Profile , Categoria , Usuario , Foto, Questao, Categ],
    logging: false,
    synchronize: true,
})

export default dataSource