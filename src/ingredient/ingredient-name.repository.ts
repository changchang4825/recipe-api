import { Injectable } from "@nestjs/common";
import { IngredientName } from "./ingredient-name.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class IngredientNameRepository {
    constructor(
        @InjectModel(IngredientName.name) private readonly ingredientNameModel: Model<IngredientName>
    ) { }

    async getIngredientNamesByPage(
        page: number | undefined = 1,
        limit: number | undefined = 10
    ) {
        return await this.ingredientNameModel
            .find()
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()
            .exec();
    }
}