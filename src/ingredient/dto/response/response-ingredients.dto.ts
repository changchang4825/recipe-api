import { Expose } from "class-transformer";

export class ResponseIngredientsDto {
    @Expose()
    recipeCode: number;

    @Expose()
    index: number;

    @Expose()
    name: string;

    @Expose()
    amount: string;

    @Expose()
    code: number;

    @Expose()
    type: string;
}