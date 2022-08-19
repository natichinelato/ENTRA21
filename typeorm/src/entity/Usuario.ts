import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Foto } from "./foto"


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Foto, (foto) => foto.user)
    fotos: Foto[]

}