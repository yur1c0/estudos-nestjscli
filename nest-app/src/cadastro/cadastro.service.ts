import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityCadastro } from './entities/cadastro.entity';

@Injectable()
export class CadastroService {
    constructor(
        @InjectRepository(EntityCadastro)
        private readonly createRepository: Repository<EntityCadastro>,
    ){}

    alertError(){
        throw new NotFoundException('Não encontrado.');
    }

    async findAll(){
        return await this.createRepository.find();
    }
}
