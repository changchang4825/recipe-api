import { Controller, Get, Query } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { PageQueryDto } from 'src/common/dtos/page-query.dto';
import { ResponseIngredientsNameDto } from './dto/response/response-ingredients-name.dto';

@Controller('ingredients')
export class IngredientController {
    constructor(
        private readonly ingredientService: IngredientService,
    ) { }

    @Get()
    @Serialize(ResponseIngredientsNameDto)
    async getIngredientsByPage(
        @Query() dto: PageQueryDto,
    ) {
        return await this.ingredientService.getIngredientsByPage(dto);
    }
}
