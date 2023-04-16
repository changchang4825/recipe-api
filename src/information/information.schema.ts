import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type InformationDocument = HydratedDocument<Information>;

@Schema({ collection: 'informations' })
export class Information {
    @Prop()
    recipeCode: number;

    @Prop()
    name: string;

    @Prop()
    summary: string;

    @Prop()
    typeCode: number;

    @Prop()
    category: string;

    @Prop()
    foodClassificationCode: number;

    @Prop()
    foodType: string;

    @Prop()
    time: string;

    @Prop()
    calorie: string;

    @Prop()
    servings: string;

    @Prop()
    difficulty: string;

    @Prop()
    ingredient: string;

    @Prop()
    price: string;

    @Prop()
    imageURL: string;

    @Prop()
    detailURL: string;
}

export const InformationSchema = SchemaFactory.createForClass(Information);