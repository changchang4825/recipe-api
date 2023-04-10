import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient } from './ingredient.schema';
import { Model } from 'mongoose';

@Injectable()
export class IngredientRepository {
    constructor(
        @InjectModel(Ingredient.name) private readonly ingredientModel: Model<Ingredient>
    ) { }

    async getIngredientsByPage(
        page: number | undefined = 1,
        limit: number | undefined = 10
    ) {
        return await this.ingredientModel
            .find()
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()
            .exec();
    }
}
