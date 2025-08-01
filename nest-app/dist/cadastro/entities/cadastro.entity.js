"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCadastro = void 0;
const typeorm_1 = require("typeorm");
let EntityCadastro = class EntityCadastro {
    id;
    name;
    telefone;
    email;
    cpf;
};
exports.EntityCadastro = EntityCadastro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EntityCadastro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "name", type: "varchar", length: 55 }),
    __metadata("design:type", String)
], EntityCadastro.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "email", type: "varchar", length: 55 }),
    __metadata("design:type", String)
], EntityCadastro.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "telefon", type: "varchar", length: 55, nullable: true }),
    __metadata("design:type", String)
], EntityCadastro.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cpf", type: "varchar", length: 11, nullable: true }),
    __metadata("design:type", String)
], EntityCadastro.prototype, "cpf", void 0);
exports.EntityCadastro = EntityCadastro = __decorate([
    (0, typeorm_1.Entity)()
], EntityCadastro);
//# sourceMappingURL=cadastro.entity.js.map