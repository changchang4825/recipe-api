import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';
import { PageQueryDto } from 'src/common/dtos/page-query.dto';
import { IngredientNameRepository } from './ingredient-name.repository';

@Injectable()
export class IngredientService {
    constructor(
        private readonly ingredientRepository: IngredientRepository,
        private readonly ingredientNameRepository: IngredientNameRepository,
    ) { }

    private readonly logger = new Logger(IngredientService.name);

    async getIngredientsByPage(dto: PageQueryDto) {
        try {
            const { page, limit } = dto;
            return await this.ingredientNameRepository.getIngredientNamesByPage(page, limit);
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException('서버 에러입니다.');
        }
    }
}
