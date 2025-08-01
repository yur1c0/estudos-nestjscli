import { Repository } from 'typeorm';
import { EntityCadastro } from './entities/cadastro.entity';
export declare class CadastroService {
    private readonly repository;
    constructor(repository?: {
        new (target: import("typeorm").EntityTarget<EntityCadastro>, manager: import("typeorm").EntityManager, queryRunner?: import("typeorm").QueryRunner): Repository<EntityCadastro>;
    });
}
