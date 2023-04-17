import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
    ) {}

    @Get(':recipeCode')
    async getOrder(
        @Param('recipeCode') recipeCode: number,
    ) {
        return await this.orderService.getOrder(recipeCode);
    }
}
