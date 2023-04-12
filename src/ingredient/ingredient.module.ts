import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from './ingredient.schema';
import { IngredientRepository } from './ingredient.repository';
import { IngredientName, IngredientNameSchema } from './ingredient-name.schema';
import { IngredientNameRepository } from './ingredient-name.repository';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Ingredient.name, schema: IngredientSchema },
            { name: IngredientName.name, schema: IngredientNameSchema}
        ]),
    ],
    controllers: [IngredientController],
    providers: [IngredientService, IngredientRepository, IngredientNameRepository]
})
export class IngredientModule { }
