import { Controller, Get, Query } from '@nestjs/common';
import { CadastroService } from './cadastro.service';

@Controller('cadastro')
export class CadastroController {
    constructor(private readonly cadastroService: CadastroService){}

    @Get()
    findall(@Query() Paramentro: any){
        return this.cadastroService.findAll();
    }

}
