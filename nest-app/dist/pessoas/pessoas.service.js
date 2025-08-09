"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoasService = void 0;
const common_1 = require("@nestjs/common");
let PessoasService = class PessoasService {
    create(createPessoaDto) {
        return 'This action adds a new pessoa';
    }
    findAll() {
        return `This action returns all pessoas`;
    }
    findOne(id) {
        return `This action returns a #${id} pessoa`;
    }
    update(id, updatePessoaDto) {
        return `This action updates a #${id} pessoa`;
    }
    remove(id) {
        return `This action removes a #${id} pessoa`;
    }
};
exports.PessoasService = PessoasService;
exports.PessoasService = PessoasService = __decorate([
    (0, common_1.Injectable)()
], PessoasService);
//# sourceMappingURL=pessoas.service.js.map