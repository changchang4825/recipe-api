import { PickType } from "@nestjs/mapped-types";
import { ResponseIngredientsDto } from "./response-ingredients.dto";

export class ResponseIngredientsNameDto extends PickType(ResponseIngredientsDto, ['name'] as const) { }