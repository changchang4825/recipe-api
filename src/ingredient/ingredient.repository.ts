import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient } from './ingredient.schema';
import { Model } from 'mongoose';

@Injectable()
export class IngredientRepository {
    constructor(
        @InjectModel(Ingredient.name) private readonly ingredientModel: Model<Ingredient>
    ) { }

    async findLeanDocsByName(name: string) {
        return await this.ingredientModel
            .find({ name })
            .lean()
            .exec();
    }

    async findByNames(names: string[]) {
        return await this.ingredientModel
            .find({ name: names })
            .lean()
            .exec();
    }

    async findByRecipeCodes(recipeCodes: number[]) {
        return await this.ingredientModel
            .find({ recipeCode: recipeCodes })
            .lean()
            .exec();
    }
}
