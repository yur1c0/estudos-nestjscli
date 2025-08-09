import { IsNotEmpty, IsString, MaxLength, maxLength, MinLength } from 'class-validator';

export class CreatePessoaDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(55)
    name: string;    

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(11)
    cpf: string;
}
