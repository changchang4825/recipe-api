import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
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
}
