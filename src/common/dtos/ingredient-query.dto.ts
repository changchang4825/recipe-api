import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class IngredientQueryDto {
    @IsString({ each: true })
    @Transform(({ value }) => value.split(','))
    readonly ingredients: string[];
}