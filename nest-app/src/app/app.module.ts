import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroController } from 'src/cadastro/cadastro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'postgres',
    port: 5432,
    password: '1298',
    host: 'localhost',
    database: 'postgres',
    synchronize: true,
  }),CadastroController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
