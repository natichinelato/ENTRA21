import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { Categoria } from "./categoria"


@Entity("tb_produto")
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descrição: string

    @Column()
    preco: number

    @Column()
    estoque: number

    @OneToOne(() => Categoria)
   @JoinColumn({ name: 'id_categoria' })
    categoria: Categoria
}