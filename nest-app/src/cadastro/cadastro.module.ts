import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroController } from './cadastro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityCadastro } from './entities/cadastro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntityCadastro])],
  controllers: [CadastroController],
  providers: [CadastroService]
})
export class CadastroModule {}
