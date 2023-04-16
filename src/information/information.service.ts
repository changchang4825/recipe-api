import { HttpException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InformationRepository } from './information.repository';
import { IngredientRepository } from 'src/ingredient/ingredient.repository';

@Injectable()
export class InformationService {
    constructor(
        private readonly informationRepository: InformationRepository,
        private readonly ingredientRepository: IngredientRepository,
    ) { }

    private readonly logger = new Logger(InformationService.name);

    async getInformationsByName(name: string) {
        try {
            const ingredients = await this.ingredientRepository.findLeanDocsByName(name);
            const recipeCodes = await Promise.all(
                ingredients.map(async ingredient => ingredient.recipeCode)
            );
            return await this.informationRepository.getInformationsByRecipeCodes(recipeCodes);
        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException('서버 에러');
        }
    }

    async getInformation(name: string) {
        try {
            const information = await this.informationRepository.findByname(name);

            if (!information) {
                throw new NotFoundException('레시피 정보가 없습니다.');
            }

            return information;
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            this.logger.error(error);
            throw new InternalServerErrorException('서버 에러');
        }
    }
}
