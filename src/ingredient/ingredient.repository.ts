import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient } from './ingredient.schema';
import { Model } from 'mongoose';

@Injectable()
export class IngredientRepository {
    constructor(
        @InjectModel(Ingredient.name) private readonly ingredientModel: Model<Ingredient>
    ) { }
}
