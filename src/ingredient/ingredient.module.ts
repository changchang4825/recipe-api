import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from './ingredient.schema';
import { IngredientRepository } from './ingredient.repository';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Ingredient.name, schema: IngredientSchema },
        ]),
    ],
    controllers: [IngredientController],
    providers: [IngredientService, IngredientRepository]
})
export class IngredientModule { }
