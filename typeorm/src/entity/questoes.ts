import {
    Entity,
    PrimaryGeneratedColumn,
    Column, 
    JoinTable,
     ManyToMany,
  } from "typeorm"
import { Categ } from "./cate"


@Entity()
export class Questao {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string
    
    @ManyToMany(() => Categ)
    @JoinTable({
    name: 'categoria_questao', 
    joinColumn: { 
    name:'questao_id',
    referencedColumnName: "id"},
    inverseJoinColumn:{
        name:"categoria_id",
        referencedColumnName: "id"
    }
  } )

    categories: Categ[]

}