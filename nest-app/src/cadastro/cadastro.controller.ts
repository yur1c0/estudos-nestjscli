import { Controller } from '@nestjs/common';
import { CadastroService } from './cadastro.service';

@Controller('cadastro')
export class CadastroController {
    constructor(private readonly cadastroService: CadastroService){}
}
