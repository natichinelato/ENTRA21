import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { Profile } from "./profile"

@Entity("tb_user")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

   @OneToOne(() => Profile)
   @JoinColumn({ name: 'id_profile' })
    profile: Profile
}