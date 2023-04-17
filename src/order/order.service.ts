import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(
        private readonly orderRepository: OrderRepository,
    ) { }

    private readonly logger = new Logger(OrderService.name);

    async getOrder(recipeCode: number) {
        try {
            return await this.orderRepository.findOrders(recipeCode);
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException('서버 에러');
        }
    }
}
