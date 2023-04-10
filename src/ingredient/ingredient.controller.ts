import { Controller, Get, Query } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { ResponseIngredientsDto } from './dto/response/response-ingredients.dto';
import { PageQueryDto } from 'src/common/dtos/page-query.dto';

@Controller('ingredients')
export class IngredientController {
    constructor(
        private readonly ingredientService: IngredientService,
    ) { }

    @Get()
    @Serialize(ResponseIngredientsDto)
    async getIngredientsByPage(
        @Query() dto: PageQueryDto,
    ) {
        return await this.ingredientService.getIngredientsByPage(dto);
    }
}
