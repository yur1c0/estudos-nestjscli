import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EntityCadastro{
    @PrimaryGeneratedColumn()
    id: number
    @Column({name: "name", type: "varchar", length: 55})
    name: string
    @Column({name: "email", type: "varchar", length: 55})
    telefone: string
    @Column({name: "telefon", type: "varchar", length: 55, nullable: true})
    email: string
    @Column({name: "cpf", type: "varchar", length: 11, nullable: true})
    cpf: string
}