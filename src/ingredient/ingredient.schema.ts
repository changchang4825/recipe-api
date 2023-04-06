import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type IngredientDocument = HydratedDocument<Ingredient>;

@Schema()
export class Ingredient {
    @Prop()
    recipeCode: number;

    @Prop()
    index: number;

    @Prop()
    name: string;

    @Prop()
    amount: string;

    @Prop()
    code: number;

    @Prop()
    type: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);