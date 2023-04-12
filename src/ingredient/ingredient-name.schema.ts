import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type IngredientNameDocument = HydratedDocument<IngredientName>;

@Schema({ timestamps: true })
export class IngredientName {
    @Prop()
    name: string;
}

export const IngredientNameSchema = SchemaFactory.createForClass(IngredientName);