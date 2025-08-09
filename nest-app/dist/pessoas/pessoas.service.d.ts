import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
export declare class PessoasService {
    create(createPessoaDto: CreatePessoaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePessoaDto: UpdatePessoaDto): string;
    remove(id: number): string;
}
