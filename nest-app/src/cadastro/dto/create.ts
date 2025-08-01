import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    name: string
    
    @IsString()
    @IsNotEmpty()
    telefone: string
    
    @IsString()
    @IsNotEmpty()
    email: string
    
    @IsString()
    @IsNotEmpty()
    @MinLength(11)
    @MaxLength(11)
    cpf: string
}