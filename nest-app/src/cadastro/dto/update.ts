import { PartialType } from "@nestjs/mapped-types";
import { CreateDTO } from "./create";

export class updateDto extends PartialType(CreateDTO){}