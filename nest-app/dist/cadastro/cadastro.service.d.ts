import { Repository } from 'typeorm';
import { EntityCadastro } from './entities/cadastro.entity';
export declare class CadastroService {
    private readonly createRepository;
    constructor(createRepository: Repository<EntityCadastro>);
    alertError(): void;
    findAll(): Promise<EntityCadastro[]>;
}
