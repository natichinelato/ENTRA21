import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Categ {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}