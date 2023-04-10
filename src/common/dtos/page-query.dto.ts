import { Transform } from "class-transformer";
import { IsInt, Min, ValidateIf } from "class-validator";

export class PageQueryDto {
    @IsInt()
    @Min(1)
    @ValidateIf((object, value) => value !== undefined)
    @Transform(params => Number(params.obj.page))
    page?: number;

    @IsInt()
    @Min(1)
    @ValidateIf((object, value) => value !== undefined)
    @Transform(params => Number(params.obj.limit))
    limit?: number;
}