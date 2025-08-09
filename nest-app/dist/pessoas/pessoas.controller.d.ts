import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
export declare class PessoasController {
    private readonly pessoasService;
    constructor(pessoasService: PessoasService);
    create(createPessoaDto: CreatePessoaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePessoaDto: UpdatePessoaDto): string;
    remove(id: string): string;
}
