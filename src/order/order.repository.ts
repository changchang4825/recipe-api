import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrderRepository {
    constructor(
        @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    ) { }

    async findOrders(recipeCode: number) {
        return await this.orderModel
            .find({ recipeCode })
            .sort({ order: 1 })
            .lean()
            .exec();
    }
}
