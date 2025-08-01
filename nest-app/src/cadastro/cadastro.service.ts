import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityCadastro } from './entities/cadastro.entity';

@Injectable()
export class CadastroService {
    constructor(
        @InjectRepository(EntityCadastro)
        private readonly repository = Repository<EntityCadastro>,
    ){}
}
