import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop()
    recipeCode: number;

    @Prop()
    order: number;

    @Prop()
    description: string;

    @Prop()
    imageURL: string;

    @Prop()
    tip: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);