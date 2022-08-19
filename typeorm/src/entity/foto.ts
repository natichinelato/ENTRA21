import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Usuario } from "./Usuario"


@Entity()
export class Foto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Usuario ,  (user) => user.fotos)
    @JoinColumn({name: 'user_id'})
       user: Usuario
   
}