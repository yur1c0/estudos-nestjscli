import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroModule } from 'src/cadastro/cadastro.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'postgres',
    port: 5432,
    password: '1298',
    host: 'localhost',
    database: 'postgres',
    synchronize: true,
  }),CadastroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
