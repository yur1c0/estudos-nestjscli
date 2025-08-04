import { CadastroService } from './cadastro.service';
export declare class CadastroController {
    private readonly cadastroService;
    constructor(cadastroService: CadastroService);
    findall(Paramentro: any): Promise<import("./entities/cadastro.entity").EntityCadastro[]>;
}
