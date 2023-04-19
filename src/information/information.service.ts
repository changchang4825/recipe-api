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

    async getInformationsByIngredientNames(names: string[]) {
        try {
            const ingredients = await this.ingredientRepository.findByNames(names);

            if (!ingredients.length) {
                throw new NotFoundException('해당하는 재료가 없습니다.');
            }

            const recipeCodeSet = new Set<number>();
            await Promise.all(
                ingredients.map(async ingredient => recipeCodeSet.add(ingredient.recipeCode))
            );
            const recipeCodes = Array.from(recipeCodeSet);
            const neededIngredients = await this.ingredientRepository.findByRecipeCodes(recipeCodes);
            const informations = await this.informationRepository.getInformationsByRecipeCodes(recipeCodes);
            const dict: { [key: number]: string[] } = {};
            await Promise.all(
                neededIngredients.map(async ingredient => {
                    if (!dict[ingredient.recipeCode]) {
                        dict[ingredient.recipeCode] = [];
                    }
                    dict[ingredient.recipeCode].push(ingredient.name);
                })
            );
            const availableRecipes = [];
            const recommendedRecipes = [];
            informations.forEach(information => {
                const neededIngredientsArr = dict[information.recipeCode].filter(x => !names.includes(x));
                const length = neededIngredientsArr.length;
                if (length <= 3) {
                    Object.assign(information,
                        { neededIngredients: neededIngredientsArr },
                        { neededNum: length }
                    );
                    if (length === 0) availableRecipes.push(information);
                    else recommendedRecipes.push(information);
                }
            });
            recommendedRecipes.sort((a, b) => a.neededNum - b.neededNum);
            return { availableRecipes, recommendedRecipes };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            this.logger.error(error);
            throw new InternalServerErrorException('서버 에러');
        }
    }

    async getInformation(recipeCode: number) {
        try {
            const information = await this.informationRepository.findByRecipeCode(recipeCode);

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
