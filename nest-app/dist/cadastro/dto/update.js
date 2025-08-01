"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_1 = require("./create");
class updateDto extends (0, mapped_types_1.PartialType)(create_1.CreateDTO) {
}
exports.updateDto = updateDto;
//# sourceMappingURL=update.js.map