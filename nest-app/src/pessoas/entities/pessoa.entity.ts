import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column({type: "varchar", length: 55})
    @IsNotEmpty()
    name: string;
    
    @Column({type: "varchar", length: 55})
    @IsNotEmpty()
    phone: string;
    
    @Column({type: "varchar", length: 55})
    @IsNotEmpty()
    @MaxLength(11)
    cpf: string;
}
