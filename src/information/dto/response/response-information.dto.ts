import { Expose, Transform } from "class-transformer";

export class ResponseInformationDto {
    @Expose()
    readonly recipeCode: number;

    @Expose()
    readonly name: string;

    @Expose()
    readonly summary: string;

    @Expose()
    readonly typeCode: number;

    @Expose()
    readonly category: string;

    @Expose()
    readonly foodClassificationCode: number;

    @Expose()
    readonly foodType: string;

    @Expose()
    readonly time: string;

    @Expose()
    readonly calorie: string;

    @Expose()
    readonly servings: string;

    @Expose()
    readonly difficulty: string;

    @Expose()
    readonly ingredient: string;

    @Expose()
    readonly price: string;

    @Expose()
    readonly imageURL: string;

    @Expose()
    readonly detailURL: string;
}